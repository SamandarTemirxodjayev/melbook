import { n as useToast, o as navigateTo, p as __nuxt_component_0$1 } from './server.mjs';
import { k as defineShortcuts, _ as __nuxt_component_1, r as __nuxt_component_2, v as __nuxt_component_4, x as __nuxt_component_5 } from './defineShortcuts-BM8pMwmo.mjs';
import { B as BASE_URL, _ as __nuxt_component_6, d as __nuxt_component_7, e as __nuxt_component_8 } from './baseUrl-D0K5rNRZ.mjs';
import { ref, isRef, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { d as dateFormat } from './formatters-9dGwSk4d.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
    const toast = useToast();
    let categories = ref([]);
    let isOpen = ref(false);
    let isLoading = ref(true);
    let categoryText = ref("");
    let editedItem = ref(null);
    let isEditOpen = ref(false);
    const columns = [
      {
        key: "name",
        label: "Nomi"
      },
      {
        key: "createdAt",
        label: "Yaratilgan vaqti"
      },
      {
        key: "updatedAt",
        label: "Yangilangan vaqti"
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
          click: () => editCategory(row)
        },
        {
          label: "O'chirish",
          icon: "i-heroicons-trash-20-solid",
          click: () => deleteCategory(row._id)
        }
      ]
    ];
    const deleteCategory = async (id) => {
      isLoading.value = true;
      try {
        const data = await $fetch(BASE_URL + "/categories/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        if (data.status === 200) {
          toast.add({ title: data.message });
          const res = await $fetch(BASE_URL + "/categories", {
            method: "GET"
          });
          categories.value = res.data;
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
    const addCategory = async () => {
      isLoading.value = true;
      try {
        const fetchCategory = await $fetch(BASE_URL + "/categories", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({
            name: categoryText.value
          })
        });
        toast.add({ title: fetchCategory.message });
        const res = await $fetch(BASE_URL + "/categories", {
          method: "GET"
        });
        isOpen.value = false;
        categoryText.value = "";
        categories.value = res.data;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token");
          navigateTo("/exit");
        }
        console.log(error);
      }
      isLoading.value = false;
    };
    const editCategory = (row) => {
      editedItem.value = JSON.parse(JSON.stringify(row));
      isEditOpen.value = true;
    };
    const handleEditCategory = async () => {
      isLoading.value = true;
      try {
        const fetchCategory = await $fetch(
          BASE_URL + "/categories/" + editedItem.value._id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
              name: editedItem.value.name
            })
          }
        );
        isEditOpen.value = false;
        toast.add({ title: fetchCategory.message });
        const res = await $fetch(BASE_URL + "/categories", {
          method: "GET"
        });
        editedItem.value = null;
        categories.value = res.data;
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
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_0$1;
      const _component_UTable = __nuxt_component_1;
      const _component_UDropdown = __nuxt_component_2;
      const _component_UModal = __nuxt_component_4;
      const _component_UCard = __nuxt_component_5;
      const _component_UForm = __nuxt_component_6;
      const _component_UFormGroup = __nuxt_component_7;
      const _component_UInput = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-2xl font-bold">Kategoriyalar</div><div class="shadow-2xl border border-gray-500 items-center my-4"><div class="flex p-4 justify-end">`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "lg",
        onClick: ($event) => isRef(isOpen) ? isOpen.value = true : isOpen = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kategoriya Qo&#39;shish`);
          } else {
            return [
              createTextVNode("Kategoriya Qo'shish")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_UTable, {
        loading: unref(isLoading),
        "loading-state": {
          icon: "i-heroicons-arrow-path-20-solid",
          label: "Yuklanmoqda..."
        },
        progress: { color: "primary", animation: "carousel" },
        columns,
        rows: unref(categories),
        "empty-state": {
          icon: "i-heroicons-circle-stack-20-solid",
          label: "Bannerlar Mavjud Emas"
        }
      }, {
        "photo_url-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", row.photo_url)} alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: row.photo_url,
                alt: ""
              }, null, 8, ["src"])
            ];
          }
        }),
        "createdAt-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(row.createdAt))}`);
          } else {
            return [
              createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(row.createdAt)), 1)
            ];
          }
        }),
        "updatedAt-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(row.updatedAt))}`);
          } else {
            return [
              createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(row.updatedAt)), 1)
            ];
          }
        }),
        "actions-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDropdown, {
              items: items(row)
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
                items: items(row)
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
        "empty-state": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center justify-center py-6 gap-3"${_scopeId}><span class="italic text-sm"${_scopeId}>Ma&#39;lumot Mavjud Emas</span>`);
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Kategoriya Qo'shish",
              onClick: ($event) => isRef(isOpen) ? isOpen.value = true : isOpen = true
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-center py-6 gap-3" }, [
                createVNode("span", { class: "italic text-sm" }, "Ma'lumot Mavjud Emas"),
                createVNode(_component_UButton, {
                  label: "Kategoriya Qo'shish",
                  onClick: ($event) => isRef(isOpen) ? isOpen.value = true : isOpen = true
                }, null, 8, ["onClick"])
              ])
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
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}> Kategoriyani Tahrirlash </h3>`);
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
                      createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Kategoriyani Tahrirlash "),
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
                  _push3(ssrRenderComponent(_component_UForm, { onSubmit: handleEditCategory }, {
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
                                modelValue: unref(editedItem).name,
                                "onUpdate:modelValue": ($event) => unref(editedItem).name = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(editedItem).name,
                                  "onUpdate:modelValue": ($event) => unref(editedItem).name = $event
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
                                modelValue: unref(editedItem).name,
                                "onUpdate:modelValue": ($event) => unref(editedItem).name = $event
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
                    createVNode(_component_UForm, { onSubmit: handleEditCategory }, {
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
                              modelValue: unref(editedItem).name,
                              "onUpdate:modelValue": ($event) => unref(editedItem).name = $event
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
                    createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Kategoriyani Tahrirlash "),
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
                  createVNode(_component_UForm, { onSubmit: handleEditCategory }, {
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
                            modelValue: unref(editedItem).name,
                            "onUpdate:modelValue": ($event) => unref(editedItem).name = $event
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
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : isOpen = $event,
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
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}> Kategoriya Qo&#39;shish </h3>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-x-mark-20-solid",
                    class: "-my-1",
                    onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Kategoriya Qo'shish "),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "ghost",
                        icon: "i-heroicons-x-mark-20-solid",
                        class: "-my-1",
                        onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, { onSubmit: addCategory }, {
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
                                modelValue: unref(categoryText),
                                "onUpdate:modelValue": ($event) => isRef(categoryText) ? categoryText.value = $event : categoryText = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(categoryText),
                                  "onUpdate:modelValue": ($event) => isRef(categoryText) ? categoryText.value = $event : categoryText = $event
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
                                modelValue: unref(categoryText),
                                "onUpdate:modelValue": ($event) => isRef(categoryText) ? categoryText.value = $event : categoryText = $event
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
                    createVNode(_component_UForm, { onSubmit: addCategory }, {
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
                              modelValue: unref(categoryText),
                              "onUpdate:modelValue": ($event) => isRef(categoryText) ? categoryText.value = $event : categoryText = $event
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
                    createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Kategoriya Qo'shish "),
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-x-mark-20-solid",
                      class: "-my-1",
                      onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, { onSubmit: addCategory }, {
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
                            modelValue: unref(categoryText),
                            "onUpdate:modelValue": ($event) => isRef(categoryText) ? categoryText.value = $event : categoryText = $event
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CXF6WRGW.mjs.map
