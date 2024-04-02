import { _ as __nuxt_component_5, a as __nuxt_component_6, b as __nuxt_component_7 } from './Input-CVb3s9Kq.mjs';
import { n as useToast, o as navigateTo, p as __nuxt_component_2 } from './server.mjs';
import { ref, withCtx, unref, createVNode, isRef, createTextVNode, useSSRContext } from 'vue';
import { B as BASE_URL } from './baseUrl-Ds9Li2ud.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../runtime.mjs';
import 'fs';
import 'path';
import 'unhead';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let user = ref({
      username: "",
      name: "",
      surname: "",
      phone_number: "",
      password: ""
    });
    let password = ref("");
    let password2 = ref("");
    let isLoading = ref(true);
    const toast = useToast();
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
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({
            username: user.value.username,
            name: user.value.name,
            surname: user.value.surname,
            phone_number: user.value.phone_number,
            password: password.value ? password.value : user.value.password
          })
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_5;
      const _component_UFormGroup = __nuxt_component_6;
      const _component_UInput = __nuxt_component_7;
      const _component_UButton = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UForm, {
        class: "max-w-[40%]",
        onSubmit: handleSubmitForm
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-2xl font-semibold"${_scopeId}>Profil Ma&#39;lumotlari</h1>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              class: "my-[2%]",
              label: "Username",
              name: "name",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(user).username,
                    "onUpdate:modelValue": ($event) => unref(user).username = $event,
                    size: "sm",
                    placeholder: "Usernamizni kiriting"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(user).username,
                      "onUpdate:modelValue": ($event) => unref(user).username = $event,
                      size: "sm",
                      placeholder: "Usernamizni kiriting"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              class: "my-[2%]",
              label: "Ismingiz",
              name: "name",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(user).name,
                    "onUpdate:modelValue": ($event) => unref(user).name = $event,
                    size: "sm",
                    placeholder: "Ismingizni kiriting"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(user).name,
                      "onUpdate:modelValue": ($event) => unref(user).name = $event,
                      size: "sm",
                      placeholder: "Ismingizni kiriting"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              class: "my-[2%]",
              label: "Familyangiz",
              name: "surname",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(user).surname,
                    "onUpdate:modelValue": ($event) => unref(user).surname = $event,
                    size: "sm",
                    placeholder: "Familyangizni kiriting"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(user).surname,
                      "onUpdate:modelValue": ($event) => unref(user).surname = $event,
                      size: "sm",
                      placeholder: "Familyangizni kiriting"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              class: "my-[2%]",
              label: "Telefon Raqamingiz",
              name: "phone_number",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(user).phone_number,
                    "onUpdate:modelValue": ($event) => unref(user).phone_number = $event,
                    size: "sm",
                    placeholder: "Telefon Raqamingizni kiriting"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(user).phone_number,
                      "onUpdate:modelValue": ($event) => unref(user).phone_number = $event,
                      size: "sm",
                      placeholder: "Telefon Raqamingizni kiriting"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              class: "my-[2%]",
              label: "Yangi Parol",
              name: "password",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    type: "password",
                    modelValue: unref(password),
                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : password = $event,
                    size: "sm",
                    placeholder: "Yangi parolni kiriting"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      type: "password",
                      modelValue: unref(password),
                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : password = $event,
                      size: "sm",
                      placeholder: "Yangi parolni kiriting"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              class: "my-[2%]",
              label: "Yangi Parolni Takrorlang",
              name: "password",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    type: "password",
                    modelValue: unref(password2),
                    "onUpdate:modelValue": ($event) => isRef(password2) ? password2.value = $event : password2 = $event,
                    size: "sm",
                    placeholder: "Yangi parolni takroran kiriting"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      type: "password",
                      modelValue: unref(password2),
                      "onUpdate:modelValue": ($event) => isRef(password2) ? password2.value = $event : password2 = $event,
                      size: "sm",
                      placeholder: "Yangi parolni takroran kiriting"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              class: "my-[2%]",
              name: "submit",
              size: "xl"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    loading: unref(isLoading),
                    type: "submit",
                    color: "primary",
                    size: "sm",
                    block: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tasdiqlash`);
                      } else {
                        return [
                          createTextVNode("Tasdiqlash")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      loading: unref(isLoading),
                      type: "submit",
                      color: "primary",
                      size: "sm",
                      block: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Tasdiqlash")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "text-2xl font-semibold" }, "Profil Ma'lumotlari"),
              createVNode(_component_UFormGroup, {
                class: "my-[2%]",
                label: "Username",
                name: "name",
                size: "sm"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(user).username,
                    "onUpdate:modelValue": ($event) => unref(user).username = $event,
                    size: "sm",
                    placeholder: "Usernamizni kiriting"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                class: "my-[2%]",
                label: "Ismingiz",
                name: "name",
                size: "sm"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(user).name,
                    "onUpdate:modelValue": ($event) => unref(user).name = $event,
                    size: "sm",
                    placeholder: "Ismingizni kiriting"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                class: "my-[2%]",
                label: "Familyangiz",
                name: "surname",
                size: "sm"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(user).surname,
                    "onUpdate:modelValue": ($event) => unref(user).surname = $event,
                    size: "sm",
                    placeholder: "Familyangizni kiriting"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                class: "my-[2%]",
                label: "Telefon Raqamingiz",
                name: "phone_number",
                size: "sm"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(user).phone_number,
                    "onUpdate:modelValue": ($event) => unref(user).phone_number = $event,
                    size: "sm",
                    placeholder: "Telefon Raqamingizni kiriting"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                class: "my-[2%]",
                label: "Yangi Parol",
                name: "password",
                size: "sm"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    type: "password",
                    modelValue: unref(password),
                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : password = $event,
                    size: "sm",
                    placeholder: "Yangi parolni kiriting"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                class: "my-[2%]",
                label: "Yangi Parolni Takrorlang",
                name: "password",
                size: "sm"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    type: "password",
                    modelValue: unref(password2),
                    "onUpdate:modelValue": ($event) => isRef(password2) ? password2.value = $event : password2 = $event,
                    size: "sm",
                    placeholder: "Yangi parolni takroran kiriting"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                class: "my-[2%]",
                name: "submit",
                size: "xl"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UButton, {
                    loading: unref(isLoading),
                    type: "submit",
                    color: "primary",
                    size: "sm",
                    block: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Tasdiqlash")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C5uWNmiI.mjs.map
