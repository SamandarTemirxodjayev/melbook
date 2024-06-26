import { m as mergeConfig, b as appConfig, z as button, p as __nuxt_component_0$1, f as useUI, n as useToast, o as navigateTo, _ as _export_sfc } from './server.mjs';
import { k as defineShortcuts, _ as __nuxt_component_1, r as __nuxt_component_2, v as __nuxt_component_4, x as __nuxt_component_5 } from './defineShortcuts-BM8pMwmo.mjs';
import { defineComponent, toRef, computed, useSSRContext, ref, reactive, isRef, withCtx, createTextVNode, unref, createVNode, toDisplayString, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderList } from 'vue/server-renderer';
import { B as BASE_URL, _ as __nuxt_component_6, d as __nuxt_component_7, e as __nuxt_component_8 } from './baseUrl-D0K5rNRZ.mjs';
import { d as dateFormat } from './formatters-9dGwSk4d.mjs';
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

const pagination = {
  wrapper: "flex items-center -space-x-px",
  base: "",
  rounded: "first:rounded-s-md last:rounded-e-md",
  default: {
    size: "sm",
    activeButton: {
      color: "primary"
    },
    inactiveButton: {
      color: "white"
    },
    firstButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-double-left-20-solid"
    },
    lastButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-double-right-20-solid"
    },
    prevButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-left-20-solid"
    },
    nextButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-right-20-solid"
    }
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.pagination, pagination);
const buttonConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$1 = defineComponent({
  components: {
    UButton: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 7,
      validate(value) {
        return value >= 5 && value < Number.MAX_VALUE;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(buttonConfig.size).includes(value);
      }
    },
    activeButton: {
      type: Object,
      default: () => config.default.activeButton
    },
    inactiveButton: {
      type: Object,
      default: () => config.default.inactiveButton
    },
    showFirst: {
      type: Boolean,
      default: false
    },
    showLast: {
      type: Boolean,
      default: false
    },
    firstButton: {
      type: Object,
      default: () => config.default.firstButton
    },
    lastButton: {
      type: Object,
      default: () => config.default.lastButton
    },
    prevButton: {
      type: Object,
      default: () => config.default.prevButton
    },
    nextButton: {
      type: Object,
      default: () => config.default.nextButton
    },
    divider: {
      type: String,
      default: "\u2026"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("pagination", toRef(props, "ui"), config, toRef(props, "class"));
    const currentPage = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const pages = computed(() => Array.from({ length: Math.ceil(props.total / props.pageCount) }, (_, i) => i + 1));
    const displayedPages = computed(() => {
      const totalPages = pages.value.length;
      const current = currentPage.value;
      const maxDisplayedPages = Math.max(props.max, 5);
      const r = Math.floor((Math.min(maxDisplayedPages, totalPages) - 5) / 2);
      const r1 = current - r;
      const r2 = current + r;
      const beforeWrapped = r1 - 1 > 1;
      const afterWrapped = r2 + 1 < totalPages;
      const items = [];
      if (totalPages <= maxDisplayedPages) {
        for (let i = 1; i <= totalPages; i++) {
          items.push(i);
        }
        return items;
      }
      items.push(1);
      if (beforeWrapped)
        items.push(props.divider);
      if (!afterWrapped) {
        const addedItems = current + r + 2 - totalPages;
        for (let i = current - r - addedItems; i <= current - r - 1; i++) {
          items.push(i);
        }
      }
      for (let i = Math.max(2, r1); i <= Math.min(totalPages, r2); i++) {
        items.push(i);
      }
      if (!beforeWrapped) {
        const addedItems = 1 - (current - r - 2);
        for (let i = current + r + 1; i <= current + r + addedItems; i++) {
          items.push(i);
        }
      }
      if (afterWrapped)
        items.push(props.divider);
      if (r2 < totalPages) {
        items.push(totalPages);
      }
      if (items.length >= 3 && items[1] === props.divider && items[2] === 3) {
        items[1] = 2;
      }
      if (items.length >= 3 && items[items.length - 2] === props.divider && items[items.length - 1] === items.length) {
        items[items.length - 2] = items.length - 1;
      }
      return items;
    });
    const canGoFirstOrPrev = computed(() => currentPage.value > 1);
    const canGoLastOrNext = computed(() => currentPage.value < pages.value.length);
    function onClickFirst() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value = 1;
    }
    function onClickLast() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value = pages.value.length;
    }
    function onClickPage(page) {
      if (typeof page === "string") {
        return;
      }
      currentPage.value = page;
    }
    function onClickPrev() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value--;
    }
    function onClickNext() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value++;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      currentPage,
      pages,
      displayedPages,
      canGoLastOrNext,
      canGoFirstOrPrev,
      onClickPrev,
      onClickNext,
      onClickPage,
      onClickFirst,
      onClickLast
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UButton = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "first", { onClick: _ctx.onClickFirst }, () => {
    if (_ctx.firstButton && _ctx.showFirst) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.firstButton || {}, ..._ctx.firstButton }, {
        ui: { rounded: "" },
        "aria-label": "First",
        onClick: _ctx.onClickFirst
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "prev", { onClick: _ctx.onClickPrev }, () => {
    if (_ctx.prevButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.prevButton || {}, ..._ctx.prevButton }, {
        ui: { rounded: "" },
        "aria-label": "Prev",
        onClick: _ctx.onClickPrev
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`<!--[-->`);
  ssrRenderList(_ctx.displayedPages, (page, index) => {
    _push(ssrRenderComponent(_component_UButton, mergeProps({
      key: `${page}-${index}`,
      size: _ctx.size,
      disabled: _ctx.disabled,
      label: `${page}`
    }, page === _ctx.currentPage ? { ..._ctx.ui.default.activeButton || {}, ..._ctx.activeButton } : { ..._ctx.ui.default.inactiveButton || {}, ..._ctx.inactiveButton }, {
      class: [{ "pointer-events-none": typeof page === "string", "z-[1]": page === _ctx.currentPage }, _ctx.ui.base, _ctx.ui.rounded],
      ui: { rounded: "" },
      onClick: () => _ctx.onClickPage(page)
    }), null, _parent));
  });
  _push(`<!--]-->`);
  ssrRenderSlot(_ctx.$slots, "next", { onClick: _ctx.onClickNext }, () => {
    if (_ctx.nextButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.nextButton || {}, ..._ctx.nextButton }, {
        ui: { rounded: "" },
        "aria-label": "Next",
        onClick: _ctx.onClickNext
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "last", { onClick: _ctx.onClickLast }, () => {
    if (_ctx.lastButton && _ctx.showLast) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.lastButton || {}, ..._ctx.lastButton }, {
        ui: { rounded: "" },
        "aria-label": "Last",
        onClick: _ctx.onClickLast
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.14.2_nuxt@3.11.0_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui/dist/runtime/components/navigation/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    let users = ref([]);
    let isOpen = ref(false);
    let isLoading = ref(true);
    let user = reactive({
      username: "",
      name: "",
      surname: "",
      phone_number: "",
      password: ""
    });
    let page = ref(1);
    let pageCount = ref(20);
    const columns = [
      {
        key: "username",
        label: "Username"
      },
      {
        key: "name",
        label: "Ismi"
      },
      {
        key: "surname",
        label: "Familiyasi"
      },
      {
        key: "phone_number",
        label: "Telefon Raqami"
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
          label: "O'chirish",
          icon: "i-heroicons-trash-20-solid",
          click: () => deleteUser(row._id)
        }
      ]
    ];
    const deleteUser = async (id) => {
      isLoading.value = true;
      try {
        const data = await $fetch(BASE_URL + "/user/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        if (data.status === 200) {
          toast.add({ title: data.message });
          const res = await $fetch(BASE_URL + "/user/get-all", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
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
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify(user)
        });
        if (data.status === 200) {
          toast.add({ title: data.message });
          const res = await $fetch(BASE_URL + "/user/get-all", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
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
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_0$1;
      const _component_UTable = __nuxt_component_1;
      const _component_UDropdown = __nuxt_component_2;
      const _component_UPagination = __nuxt_component_3;
      const _component_UModal = __nuxt_component_4;
      const _component_UCard = __nuxt_component_5;
      const _component_UForm = __nuxt_component_6;
      const _component_UFormGroup = __nuxt_component_7;
      const _component_UInput = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-2xl font-bold">Foydalanuvchilar</div><div class="flex p-4 justify-end">`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => isRef(isOpen) ? isOpen.value = true : isOpen = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Foydalanuvchi Qo&#39;shish `);
          } else {
            return [
              createTextVNode(" Foydalanuvchi Qo'shish ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UTable, {
        loading: unref(isLoading),
        "loading-state": {
          icon: "i-heroicons-arrow-path-20-solid",
          label: "Yuklanmoqda..."
        },
        progress: { color: "primary", animation: "carousel" },
        columns,
        rows: unref(rows),
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
      _push(`<div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : page = $event,
        "page-count": unref(pageCount),
        total: unref(users).length
      }, null, _parent));
      _push(`</div>`);
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
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}> Audio Qo&#39;shish </h3>`);
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
                      createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Audio Qo'shish "),
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
                  _push3(ssrRenderComponent(_component_UForm, { onSubmit: addUser }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Foydalanuvchi Logini",
                          size: "lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(user).username,
                                "onUpdate:modelValue": ($event) => unref(user).username = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(user).username,
                                  "onUpdate:modelValue": ($event) => unref(user).username = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Foydalanuvchi Ismi",
                          size: "lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(user).name,
                                "onUpdate:modelValue": ($event) => unref(user).name = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(user).name,
                                  "onUpdate:modelValue": ($event) => unref(user).name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Foydalanuvchi Familiyasi",
                          size: "lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(user).surname,
                                "onUpdate:modelValue": ($event) => unref(user).surname = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(user).surname,
                                  "onUpdate:modelValue": ($event) => unref(user).surname = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Foydalanuvchi Telefon raqami",
                          size: "lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(user).phone_number,
                                "onUpdate:modelValue": ($event) => unref(user).phone_number = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(user).phone_number,
                                  "onUpdate:modelValue": ($event) => unref(user).phone_number = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Foydalanuvchi Paroli",
                          size: "lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(user).password,
                                "onUpdate:modelValue": ($event) => unref(user).password = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(user).password,
                                  "onUpdate:modelValue": ($event) => unref(user).password = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          name: "submit",
                          size: "xl"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UButton, {
                                loading: unref(isLoading),
                                type: "submit",
                                color: "primary",
                                size: "xl",
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
                                  size: "xl",
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
                            label: "Foydalanuvchi Logini",
                            size: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(user).username,
                                "onUpdate:modelValue": ($event) => unref(user).username = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Foydalanuvchi Ismi",
                            size: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(user).name,
                                "onUpdate:modelValue": ($event) => unref(user).name = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Foydalanuvchi Familiyasi",
                            size: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(user).surname,
                                "onUpdate:modelValue": ($event) => unref(user).surname = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Foydalanuvchi Telefon raqami",
                            size: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(user).phone_number,
                                "onUpdate:modelValue": ($event) => unref(user).phone_number = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Foydalanuvchi Paroli",
                            size: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(user).password,
                                "onUpdate:modelValue": ($event) => unref(user).password = $event
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
                                size: "xl",
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
                    createVNode(_component_UForm, { onSubmit: addUser }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Foydalanuvchi Logini",
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(user).username,
                              "onUpdate:modelValue": ($event) => unref(user).username = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Foydalanuvchi Ismi",
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(user).name,
                              "onUpdate:modelValue": ($event) => unref(user).name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Foydalanuvchi Familiyasi",
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(user).surname,
                              "onUpdate:modelValue": ($event) => unref(user).surname = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Foydalanuvchi Telefon raqami",
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(user).phone_number,
                              "onUpdate:modelValue": ($event) => unref(user).phone_number = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Foydalanuvchi Paroli",
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(user).password,
                              "onUpdate:modelValue": ($event) => unref(user).password = $event
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
                              size: "xl",
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
                    createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Audio Qo'shish "),
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
                  createVNode(_component_UForm, { onSubmit: addUser }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Foydalanuvchi Logini",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(user).username,
                            "onUpdate:modelValue": ($event) => unref(user).username = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Foydalanuvchi Ismi",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(user).name,
                            "onUpdate:modelValue": ($event) => unref(user).name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Foydalanuvchi Familiyasi",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(user).surname,
                            "onUpdate:modelValue": ($event) => unref(user).surname = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Foydalanuvchi Telefon raqami",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(user).phone_number,
                            "onUpdate:modelValue": ($event) => unref(user).phone_number = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Foydalanuvchi Paroli",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(user).password,
                            "onUpdate:modelValue": ($event) => unref(user).password = $event
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
                            size: "xl",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BYwR95Pc.mjs.map
