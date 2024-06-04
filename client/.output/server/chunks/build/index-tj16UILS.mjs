import { k as defineShortcuts, _ as __nuxt_component_1, r as __nuxt_component_2, v as __nuxt_component_4, x as __nuxt_component_5 } from './defineShortcuts-BGvCFfbh.mjs';
import { n as useToast, p as __nuxt_component_0$1 } from './server.mjs';
import { B as BASE_URL, _ as __nuxt_component_6, d as __nuxt_component_7, e as __nuxt_component_8 } from './baseUrl-7YenCTPY.mjs';
import { ref, reactive, unref, withCtx, createTextVNode, toDisplayString, createVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
    useToast();
    ref([]);
    let urls = reactive([
      {
        youtubeUrl: "",
        name: "YouTube"
      }
    ]);
    let isOpen = ref(false);
    let isLoading = ref(true);
    ref("");
    ref(null);
    let isEditOpen = ref(false);
    const columns = [
      {
        key: "name",
        label: "Nomi"
      },
      {
        key: "youtubeUrl",
        label: "Youtube ssilkasi"
      },
      {
        key: "actions",
        label: "Action"
      }
    ];
    const items = (row) => [
      [
        {
          label: "Tahrirlash",
          icon: "i-heroicons-pencil-square-20-solid",
          click: () => editUrls()
        }
      ]
    ];
    const editUrls = (row) => {
      isEditOpen.value = true;
    };
    const editUrlsHandle = async () => {
      isLoading.value = true;
      try {
        await $fetch(BASE_URL + "/urls", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({
            youtubeUrl: urls[0].youtubeUrl
          })
        });
        let data = await $fetch(BASE_URL + "/urls", {
          method: "GET"
        });
        urls[0].youtubeUrl = data.data.youtubeUrl;
        isEditOpen.value = false;
      } catch (error) {
        return console.log(error);
      }
      isLoading.value = false;
    };
    defineShortcuts({
      escape: {
        usingInput: true,
        whenever: [isOpen],
        handler: () => {
          isOpen.value = false;
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTable = __nuxt_component_1;
      const _component_UDropdown = __nuxt_component_2;
      const _component_UButton = __nuxt_component_0$1;
      const _component_UModal = __nuxt_component_4;
      const _component_UCard = __nuxt_component_5;
      const _component_UForm = __nuxt_component_6;
      const _component_UFormGroup = __nuxt_component_7;
      const _component_UInput = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-2xl font-bold">Ssilkalar</div>`);
      _push(ssrRenderComponent(_component_UTable, {
        loading: unref(isLoading),
        "loading-state": {
          icon: "i-heroicons-arrow-path-20-solid",
          label: "Yuklanmoqda..."
        },
        progress: { color: "primary", animation: "carousel" },
        columns,
        rows: unref(urls),
        "empty-state": {
          icon: "i-heroicons-circle-stack-20-solid",
          label: "Bannerlar Mavjud Emas"
        }
      }, {
        "youtubeUrl-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate()} <iframe width="560" height="315"${ssrRenderAttr("src", `https://www.youtube.com/embed/joARPQJK8vk?si=${row.youtubeUrl}`)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen${_scopeId}></iframe>`);
          } else {
            return [
              createTextVNode(toDisplayString() + " ", 1),
              createVNode("iframe", {
                width: "560",
                height: "315",
                src: `https://www.youtube.com/embed/joARPQJK8vk?si=${row.youtubeUrl}`,
                title: "YouTube video player",
                frameborder: "0",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                referrerpolicy: "strict-origin-when-cross-origin",
                allowfullscreen: ""
              }, null, 8, ["src"])
            ];
          }
        }),
        "actions-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDropdown, {
              items: items()
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-ellipsis-horizontal-20-solid"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-ellipsis-horizontal-20-solid"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDropdown, {
                items: items()
              }, {
                default: withCtx(() => [
                  createVNode(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-ellipsis-horizontal-20-solid"
                  })
                ]),
                _: 2
              }, 1032, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isEditOpen),
        "onUpdate:modelValue": ($event) => isRef(isEditOpen) ? isEditOpen.value = $event : isEditOpen = $event,
        "prevent-close": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: {
              ring: "",
              divide: "divide-y divide-gray-100 dark:divide-gray-800"
            } }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}> Ssilkani Tahrirlash </h3>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-x-mark-20-solid",
                    class: "-my-1",
                    onClick: ($event) => isRef(isEditOpen) ? isEditOpen.value = false : isEditOpen = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Ssilkani Tahrirlash "),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "ghost",
                        icon: "i-heroicons-x-mark-20-solid",
                        class: "-my-1",
                        onClick: ($event) => isRef(isEditOpen) ? isEditOpen.value = false : isEditOpen = false
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, { onSubmit: editUrlsHandle }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kategoriya Uchun Nom Kiriting",
                          name: "photo",
                          size: "lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(urls)[0].youtubeUrl,
                                "onUpdate:modelValue": ($event) => unref(urls)[0].youtubeUrl = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(urls)[0].youtubeUrl,
                                  "onUpdate:modelValue": ($event) => unref(urls)[0].youtubeUrl = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          name: "submit",
                          size: "lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UButton, {
                                loading: unref(isLoading),
                                type: "submit",
                                color: "primary",
                                size: "lg",
                                block: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Tasdiqlash`);
                                  } else {
                                    return [
                                      createTextVNode("Tasdiqlash")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UButton, {
                                  loading: unref(isLoading),
                                  type: "submit",
                                  color: "primary",
                                  size: "lg",
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Kategoriya Uchun Nom Kiriting",
                            name: "photo",
                            size: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(urls)[0].youtubeUrl,
                                "onUpdate:modelValue": ($event) => unref(urls)[0].youtubeUrl = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            name: "submit",
                            size: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                loading: unref(isLoading),
                                type: "submit",
                                color: "primary",
                                size: "lg",
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, { onSubmit: editUrlsHandle }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kategoriya Uchun Nom Kiriting",
                          name: "photo",
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(urls)[0].youtubeUrl,
                              "onUpdate:modelValue": ($event) => unref(urls)[0].youtubeUrl = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          name: "submit",
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UButton, {
                              loading: unref(isLoading),
                              type: "submit",
                              color: "primary",
                              size: "lg",
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
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: {
                ring: "",
                divide: "divide-y divide-gray-100 dark:divide-gray-800"
              } }, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Ssilkani Tahrirlash "),
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-x-mark-20-solid",
                      class: "-my-1",
                      onClick: ($event) => isRef(isEditOpen) ? isEditOpen.value = false : isEditOpen = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, { onSubmit: editUrlsHandle }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Kategoriya Uchun Nom Kiriting",
                        name: "photo",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(urls)[0].youtubeUrl,
                            "onUpdate:modelValue": ($event) => unref(urls)[0].youtubeUrl = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        name: "submit",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UButton, {
                            loading: unref(isLoading),
                            type: "submit",
                            color: "primary",
                            size: "lg",
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
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/urls/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-tj16UILS.mjs.map
