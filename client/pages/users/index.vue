<script setup>
const toast = useToast();

let users = ref([]);
let isOpen = ref(false);
let isLoading = ref(true);
let user = reactive({
  username: "",
  name: "",
  surname: "",
  phone_number: "",
  password: "",
});
let page = ref(1);
let pageCount = ref(20);

onMounted(async () => {
  try {
    const data = await $fetch(BASE_URL + "/user/get-all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    users.value = data.data;
    isLoading.value = false;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      navigateTo("/exit");
    }
  }
});

const columns = [
  {
    key: "username",
    label: "Username",
  },
  {
    key: "name",
    label: "Ismi",
  },
  {
    key: "surname",
    label: "Familiyasi",
  },
  {
    key: "phone_number",
    label: "Telefon Raqami",
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
      click: () => deleteUser(row._id),
    },
  ],
];
const deleteUser = async (id) => {
  isLoading.value = true;
  try {
    const data = await $fetch(BASE_URL + "/user/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 200) {
      toast.add({ title: data.message });
      const res = await $fetch(BASE_URL + "/user/get-all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      users.value = res.data;
    } else {
      toast.add({ title: data.message });
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      navigateTo("/exit");
    }
  }
  isLoading.value = false;
};
const addUser = async () => {
  isLoading.value = true;
  try {
    console.log(user);
    const data = await $fetch(BASE_URL + "/user/register/by-admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(user),
    });
    if (data.status === 200) {
      toast.add({ title: data.message });
      const res = await $fetch(BASE_URL + "/user/get-all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      isOpen.value = false;
      users.value = res.data;
    } else {
      toast.add({ title: data.message });
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      navigateTo("/exit");
    }
  }
  isLoading.value = false;
};
const rows = computed(() => {
  return users.value.slice(
    (page.value - 1) * pageCount.value,
    page.value * pageCount.value
  );
});
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
    <div class="text-2xl font-bold">Foydalanuvchilar</div>
    <div class="flex p-4 justify-end">
      <UButton @click="isOpen = true"> Foydalanuvchi Qo'shish </UButton>
    </div>
    <UTable
      :loading="isLoading"
      :loading-state="{
        icon: 'i-heroicons-arrow-path-20-solid',
        label: 'Yuklanmoqda...',
      }"
      :progress="{ color: 'primary', animation: 'carousel' }"
      :columns="columns"
      :rows="rows"
      :empty-state="{
        icon: 'i-heroicons-circle-stack-20-solid',
        label: 'Bannerlar Mavjud Emas',
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
          <UButton label="Kategoriya Qo'shish" @click="isOpen = true" />
        </div>
      </template>
    </UTable>
    <div
      class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"
    >
      <UPagination
        v-model="page"
        :page-count="pageCount"
        :total="users.length"
      />
    </div>
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

        <UForm @submit="addUser">
          <UFormGroup class="my-[2%]" label="Foydalanuvchi Logini" size="lg">
            <UInput type="text" size="lg" v-model="user.username" />
          </UFormGroup>
          <UFormGroup class="my-[2%]" label="Foydalanuvchi Ismi" size="lg">
            <UInput type="text" size="lg" v-model="user.name" />
          </UFormGroup>
          <UFormGroup
            class="my-[2%]"
            label="Foydalanuvchi Familiyasi"
            size="lg"
          >
            <UInput type="text" size="lg" v-model="user.surname" />
          </UFormGroup>
          <UFormGroup
            class="my-[2%]"
            label="Foydalanuvchi Telefon raqami"
            size="lg"
          >
            <UInput type="text" size="lg" v-model="user.phone_number" />
          </UFormGroup>
          <UFormGroup class="my-[2%]" label="Foydalanuvchi Paroli" size="lg">
            <UInput type="text" size="lg" v-model="user.password" />
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