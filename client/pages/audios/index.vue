<script setup>
const toast = useToast();

let books = ref([]);
let book = ref(null);
let audios = ref([]);
let isOpen = ref(false);
let isLoading = ref(true);
let photo_url = ref(null);
let audio_content = ref(null);
let text = ref(null);

onMounted(async () => {
  try {
    const data = await $fetch(BASE_URL + "/audios", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    audios.value = data.data;
    const bookData = await $fetch(BASE_URL + "/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    audios.value = data.data;
    books.value = bookData.data;
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
    key: "book_id.name",
    label: "Kitob",
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
      label: "O'chirish",
      icon: "i-heroicons-trash-20-solid",
      click: () => deleteAudio(row._id),
    },
  ],
];
const deleteAudio = async (id) => {
  isLoading.value = true;
  try {
    const data = await $fetch(BASE_URL + "/audios/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 200) {
      toast.add({ title: data.message });
      const res = await $fetch(BASE_URL + "/audios", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      audios.value = res.data;
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
function handleFileChange(event) {
  photo_url.value = event.target.files[0];
}
const addBanner = async () => {
  isLoading.value = true;
  try {
    const formdata = new FormData();
    formdata.append("file", photo_url.value);
    console.log(formdata);
    const { data } = await $fetch(CDN_URL + "/upload", {
      method: "POST",
      body: formdata,
    });
    await $fetch(BASE_URL + "/audios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        audio_url: data.fileUrl,
        name: text.value,
        book_id: book.value,
        audio_content: audio_content.value,
      }),
    });
    isOpen.value = false;
    toast.add({ title: "Qo'shildi" });
    const res = await $fetch(BASE_URL + "/audios", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    photo_url.value = null;
    text.value = null;
    audios.value = res.data;
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
    <div class="text-2xl font-bold">Audiolar</div>
    <div class="shadow-2xl border border-gray-500 items-center my-4">
      <div class="flex p-4 justify-end">
        <UButton size="lg" @click="isOpen = true">Audio Qo'shish</UButton>
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
      :rows="audios"
      :empty-state="{
        icon: 'i-heroicons-circle-stack-20-solid',
        label: 'Audiolar Mavjud Emas',
      }"
    >
      <template #photo_url-data="{ row }">
        <img :src="row.photo_url" alt="" />
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
          <UButton label="Audio Qo'shish" @click="isOpen = true" />
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
              Audio Qo'shish
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
          <UFormGroup class="my-[2%]" label="Kitob Kategoriyasi" name="photo">
            <UInputMenu
              v-model="book"
              :options="books"
              placeholder="Kitobni Tanglang"
              by="_id"
              value-attribute="_id"
              option-attribute="name"
              :search-attributes="['name']"
            >
              <template #option="{ option: item }">
                <span class="truncate">{{ item.name }}</span>
              </template>
            </UInputMenu>
          </UFormGroup>

          <UFormGroup
            class="my-[2%]"
            label="Audioni Nomi"
            name="photo"
            size="lg"
          >
            <UInput type="text" size="lg" v-model="text" />
          </UFormGroup>
          <UFormGroup
            class="my-[2%]"
            label="Audioni Matni"
            name="photo"
            size="lg"
          >
            <UTextarea type="text" size="lg" v-model="audio_content" />
          </UFormGroup>
          <UFormGroup
            class="my-[2%]"
            label="Audioni Yuklang"
            name="photo"
            size="lg"
          >
            <UInput type="file" size="lg" @change="handleFileChange" />
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