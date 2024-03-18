<script setup>
definePageMeta({
  layout: false,
});

const toast = useToast();

const username = ref("");
const password = ref("");
const isLoading = ref(false);

const loginToSystem = async () => {
  if (username.value === "") {
    return toast.add({ title: "Loginingizni Kiriting" });
  }
  if (password.value === "") {
    return toast.add({ title: "Parolingizni Kiriting" });
  }
  isLoading.value = true;
  const { data, error } = await useFetch(BASE_URL + "/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  });
  if (error.value) {
    isLoading.value = false;
    return toast.add({ title: error.value.data.message });
  } else {
    localStorage.setItem("token", data.value.data.token);
    toast.add({ title: data.value.message });
    navigateTo("/");
    isLoading.value = false;
  }
};

onBeforeMount(() => {
  if (localStorage.getItem("token")) {
    navigateTo("/");
  }
});
</script>

<template>
  <div class="mt-[15%] flex justify-center items-center">
    <UForm class="min-w-[50%]" @submit="loginToSystem">
      <h1 class="text-3xl my-[2%] font-bold">Tizimga Kirish</h1>
      <NuxtLoadingIndicator />

      <UFormGroup class="my-[2%]" label="Username" name="username" size="lg">
        <UInput
          v-model="username"
          size="lg"
          placeholder="Loginingizni kiriting"
        />
      </UFormGroup>
      <UFormGroup class="my-[2%]" label="Parol" name="password" size="lg">
        <UInput
          v-model="password"
          size="lg"
          placeholder="Parolingizni kiriting"
        />
      </UFormGroup>
      <UFormGroup class="my-[2%]" name="submit" size="lg">
        <UButton
          :loading="isLoading"
          type="submit"
          color="primary"
          size="lg"
          block
          >Tasdiqlash</UButton
        >
      </UFormGroup>
    </UForm>
  </div>
</template>