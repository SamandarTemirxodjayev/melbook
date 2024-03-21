<script setup>
const toast = useToast();

let banners = ref([]);
let isOpen = ref(false);
let isOpenEdit = ref(false);
let isLoading = ref(true);
let categories = ref([]);

let book = ref(null);
let name = ref("");
let description = ref("");
let photo_url = ref(null);
let author = ref("");
let category = ref("");
let price = ref(null);
let audioBook = ref(null);
let bookFile = ref(null);

onMounted(async () => {
  try {
    const data = await $fetch(BASE_URL + "/books", {
      method: "GET",
    });
    banners.value = data.data;
    const categoriesData = await $fetch(BASE_URL + "/categories", {
      method: "GET",
    });
    categories.value = categoriesData.data;
    isLoading.value = false;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      navigateTo("/exit");
    }
    console.log(error);
  }
});
const columns = [
  {
    key: "name",
    label: "Nomi",
  },
  {
    key: "photo_url",
    label: "Rasm",
  },
  {
    key: "description",
    label: "Batafsil",
  },
  {
    key: "author",
    label: "Yozuvchi",
  },
  {
    key: "price",
    label: "Narxi",
  },
  {
    key: "category",
    label: "Kategoriyasi",
  },
  {
    key: "createdAt",
    label: "Yaratilgan vaqti",
  },
  {
    key: "updatedAt",
    label: "Yangilangan vaqti",
  },
  {
    key: "actions",
    label: "Action",
  },
];
const items = (row) => [
  [
    {
      label: "Tahrirlash",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => editBook(row),
    },
    {
      label: "O'chirish",
      icon: "i-heroicons-trash-20-solid",
      click: () => deleteBook(row._id),
    },
  ],
  [
    {
      label: "Yuklab Olish(Kitob)",
      icon: "i-heroicons-archive-box-arrow-down",
      click: () => downloadBook(row.book_url, row.name),
    },
    {
      label: "Yuklab Olish(Audio)",
      icon: "i-heroicons-archive-box-arrow-down",
      click: () => downloadBookAudio(row.book_audio_url, row.name),
    },
  ],
];
const editBook = async (row) => {
  isOpenEdit.value = true;
  book.value = row._id;
  name.value = row.name;
  description.value = row.description;
  author.value = row.author;
  category.value = row.category._id;
  price.value = row.price;
};
const handleEditBook = async () => {
  isLoading.value = true;
  try {
    await $fetch(BASE_URL + `/books/${book.value}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        author: author.value,
        category: category.value,
        price: price.value,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const getData = await $fetch(BASE_URL + "/books", {
      method: "GET",
    });
    name.value = "";
    description.value = "";
    author.value = "";
    category.value = "";
    price.value = "";
    banners.value = getData.data;
    isOpenEdit.value = false;
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
  isOpenEdit.value = false;
};
const downloadBook = async (bookUrl, name) => {
  const response = await fetch(bookUrl);
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${name}.pdf`;
  a.click();
};
const downloadBookAudio = async (bookAudioUrl, name) => {
  const response = await fetch(bookAudioUrl);
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${name}.mp3`;
  a.click();
};
const deleteBook = async (id) => {
  isLoading.value = true;
  try {
    const data = await $fetch(BASE_URL + "/books/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 200) {
      toast.add({ title: data.message });
      const res = await $fetch(BASE_URL + "/books", {
        method: "GET",
      });
      banners.value = res.data;
    } else {
      toast.add({ title: data.message });
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      navigateTo("/exit");
    }
    console.log(error);
  }
  isLoading.value = false;
};
function bookPhotoChange(event) {
  if (event.target.files.length > 0) {
    photo_url.value = event.target.files[0];
  }
}
function bookAudioFileChange(event) {
  if (event.target.files.length > 0) {
    audioBook.value = event.target.files[0];
  }
}
function handleFileChange(event) {
  if (event.target.files.length > 0) {
    bookFile.value = event.target.files[0];
  }
}
const addBanner = async () => {
  isLoading.value = true;
  try {
    let formdata = new FormData();
    formdata.append("file", photo_url.value);
    const photoUrlRes = await $fetch(CDN_URL + "/upload", {
      method: "POST",
      body: formdata,
    });

    formdata = new FormData();
    formdata.append("file", audioBook.value);
    const audioBookRes = await $fetch(CDN_URL + "/upload", {
      method: "POST",
      body: formdata,
    });

    formdata = new FormData();
    formdata.append("file", bookFile.value);
    const fileBookRes = await $fetch(CDN_URL + "/upload", {
      method: "POST",
      body: formdata,
    });
    const fetchBanner = await $fetch(BASE_URL + "/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        photo_url: photoUrlRes.data.fileUrl,
        book_audio_url: audioBookRes.data.fileUrl,
        book_url: fileBookRes.data.fileUrl,
        name: name.value,
        description: description.value,
        author: author.value,
        category: category.value,
        price: price.value,
      }),
    });
    isOpen.value = false;
    toast.add({ title: fetchBanner.message });
    const res = await $fetch(BASE_URL + "/books", {
      method: "GET",
    });
    photo_url.value = null;
    banners.value = res.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      navigateTo("/exit");
    }
    console.log(error);
  }
  isLoading.value = false;
};
defineShortcuts({
  escape: {
    usingInput: true,
    whenever: [isOpen],
    handler: () => {
      isOpen.value = false;
    },
  },
});
</script>

<template>
  <div>
    <div class="text-2xl font-bold">Kitoblar</div>
    <div
      class="shadow-2xl border border-gray-300 dark:border-gray-500 items-center my-4"
    >
      <div class="flex p-4 justify-end">
        <UButton size="lg" @click="isOpen = true">Kitob Qo'shish</UButton>
      </div>
    </div>
    <UTable
      :loading="isLoading"
      :loading-state="{
        icon: 'i-heroicons-arrow-path-20-solid',
        label: 'Yuklanmoqda...',
      }"
      :progress="{ color: 'primary', animation: 'carousel' }"
      :columns="columns"
      :rows="banners"
      :empty-state="{
        icon: 'i-heroicons-circle-stack-20-solid',
        label: 'Bannerlar Mavjud Emas',
      }"
    >
      <template #description-data="{ row }">
        <div class="whitespace-pre-line w-[300px]">{{ row.description }}</div>
      </template>
      <template #price-data="{ row }">
        <div>{{ numberFormat(row.price) }} so'm</div>
      </template>
      <template #photo_url-data="{ row }">
        <img :src="row.photo_url" alt="" class="max-w-[100px]" />
      </template>
      <template #category-data="{ row }">
        <div>
          {{ row.category.name }}
        </div>
      </template>
      <template #createdAt-data="{ row }">
        {{ dateFormat(row.createdAt) }}
      </template>
      <template #updatedAt-data="{ row }">
        {{ dateFormat(row.updatedAt) }}
      </template>
      <template #actions-data="{ row }">
        <UDropdown :items="items(row)">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </UDropdown>
      </template>
      <template #empty-state>
        <div class="flex flex-col items-center justify-center py-6 gap-3">
          <span class="italic text-sm">Ma'lumot Mavjud Emas</span>
          <UButton label="Kitob Qo'shish" @click="isOpen = true" />
        </div>
      </template>
    </UTable>
    <UModal v-model="isOpen" prevent-close>
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Kitob Qo'shish
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>

        <UForm @submit="addBanner">
          <UFormGroup class="my-[2%]" label="Kitob Nomi" size="lg">
            <UInput type="text" size="lg" v-model="name" />
          </UFormGroup>
          <UFormGroup class="my-[2%]" label="Kitob Rasmi" size="lg">
            <UInput type="file" size="lg" @change="bookPhotoChange" />
          </UFormGroup>
          <UFormGroup class="my-[2%]" label="Kitob Haqida" name="photo">
            <UTextarea type="text" size="lg" v-model="description" />
          </UFormGroup>
          <UFormGroup class="my-[2%]" label="Kitob Muallifi" name="photo">
            <UInput type="text" size="lg" v-model="author" />
          </UFormGroup>
          <UFormGroup class="my-[2%]" label="Kitob Kategoriyasi" name="photo">
            <USelect
              type="text"
              size="lg"
              :options="categories"
              option-attribute="name"
              value-attribute="_id"
              v-model="category"
            />
          </UFormGroup>
          <UFormGroup class="my-[2%]" label="Kitob Narxi" name="photo">
            <UInput type="number" size="lg" v-model="price" />
          </UFormGroup>
          <UFormGroup class="my-[2%]" label="Kitob PDF fayli" name="photo">
            <UInput type="file" size="lg" @change="handleFileChange" />
          </UFormGroup>
          <UFormGroup class="my-[2%]" label="Kitob audio fayli" name="photo">
            <UInput type="file" size="lg" @change="bookAudioFileChange" />
          </UFormGroup>
          <UFormGroup class="my-[2%]" name="submit" size="xl">
            <UButton
              :loading="isLoading"
              type="submit"
              color="primary"
              size="xl"
              block
              >Tasdiqlash</UButton
            >
          </UFormGroup>
        </UForm>
      </UCard>
    </UModal>

    <UModal v-model="isOpenEdit" prevent-close>
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Kitob Qo'shish
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpenEdit = false"
            />
          </div>
        </template>

        <UForm @submit="handleEditBook">
          <UFormGroup class="my-[2%]" label="Kitob Nomi" size="lg">
            <UInput type="text" size="lg" v-model="name" />
          </UFormGroup>
          <UFormGroup class="my-[2%]" label="Kitob Haqida" name="photo">
            <UTextarea type="text" size="lg" v-model="description" />
          </UFormGroup>
          <UFormGroup class="my-[2%]" label="Kitob Muallifi" name="photo">
            <UInput type="text" size="lg" v-model="author" />
          </UFormGroup>
          <UFormGroup class="my-[2%]" label="Kitob Kategoriyasi" name="photo">
            <USelect
              type="text"
              size="lg"
              :options="categories"
              option-attribute="name"
              value-attribute="_id"
              v-model="category"
            />
          </UFormGroup>
          <UFormGroup class="my-[2%]" label="Kitob Narxi" name="photo">
            <UInput type="number" size="lg" v-model="price" />
          </UFormGroup>
          <UFormGroup class="my-[2%]" name="submit" size="xl">
            <UButton
              :loading="isLoading"
              type="submit"
              color="primary"
              size="xl"
              block
              >Tasdiqlash</UButton
            >
          </UFormGroup>
        </UForm>
      </UCard>
    </UModal>
  </div>
</template>