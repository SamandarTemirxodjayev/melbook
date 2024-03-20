<script setup>
let user = ref({
  username: "",
  name: "",
  surname: "",
  phone_number: "",
  password: "",
});
let password = ref("");
let password2 = ref("");
let isLoading = ref(true);

const toast = useToast();

onMounted(async () => {
  try {
    const data = await $fetch(BASE_URL + "/user/get-me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    user.value = data.data;
    isLoading.value = false;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      navigateTo("/exit");
    }
    return console.log(error);
  }
});
const handleSubmitForm = async () => {
  isLoading.value = true;
  try {
    if (password.value !== password2.value) {
      toast.add({ title: "Yangi Parol Kiritishda Xato Kiritilgan" });
      isLoading.value = false;
      return;
    }
    const data = await $fetch(BASE_URL + "/user/", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        username: user.value.username,
        name: user.value.name,
        surname: user.value.surname,
        phone_number: user.value.phone_number,
        password: password.value ? password.value : user.value.password,
      }),
    });
    toast.add({ title: data.message });
    toast.add({ title: "Boshidan Tizimga Kiring" });
    navigateTo("/exit");
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      navigateTo("/exit");
    }
  }
  isLoading.value = false;
};
</script>

<template>
  <div>
    <UForm class="max-w-[40%]" @submit="handleSubmitForm">
      <h1 class="text-2xl font-semibold">Profil Ma'lumotlari</h1>
      <UFormGroup class="my-[2%]" label="Username" name="name" size="sm">
        <UInput
          v-model="user.username"
          size="sm"
          placeholder="Usernamizni kiriting"
        />
      </UFormGroup>
      <UFormGroup class="my-[2%]" label="Ismingiz" name="name" size="sm">
        <UInput
          v-model="user.name"
          size="sm"
          placeholder="Ismingizni kiriting"
        />
      </UFormGroup>
      <UFormGroup class="my-[2%]" label="Familyangiz" name="surname" size="sm">
        <UInput
          v-model="user.surname"
          size="sm"
          placeholder="Familyangizni kiriting"
        />
      </UFormGroup>
      <UFormGroup
        class="my-[2%]"
        label="Telefon Raqamingiz"
        name="phone_number"
        size="sm"
      >
        <UInput
          v-model="user.phone_number"
          size="sm"
          placeholder="Telefon Raqamingizni kiriting"
        />
      </UFormGroup>
      <UFormGroup class="my-[2%]" label="Yangi Parol" name="password" size="sm">
        <UInput
          type="password"
          v-model="password"
          size="sm"
          placeholder="Yangi parolni kiriting"
        />
      </UFormGroup>
      <UFormGroup
        class="my-[2%]"
        label="Yangi Parolni Takrorlang"
        name="password"
        size="sm"
      >
        <UInput
          type="password"
          v-model="password2"
          size="sm"
          placeholder="Yangi parolni takroran kiriting"
        />
      </UFormGroup>
      <UFormGroup class="my-[2%]" name="submit" size="xl">
        <UButton
          :loading="isLoading"
          type="submit"
          color="primary"
          size="sm"
          block
          >Tasdiqlash</UButton
        >
      </UFormGroup>
    </UForm>
  </div>
</template>