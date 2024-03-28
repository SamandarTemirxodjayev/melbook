import { m as mergeConfig, s as select, b as appConfig, d as __nuxt_component_2$1, f as useUI, h as useInjectButtonGroup, t as twMerge, i as twJoin, n as useToast, o as navigateTo, p as __nuxt_component_2, l as get, _ as _export_sfc } from './server.mjs';
import { m as numberFormat, h as dateFormat, _ as __nuxt_component_0, k as __nuxt_component_1 } from './formatters-BQavADfa.mjs';
import { d as defineShortcuts, _ as __nuxt_component_3, a as __nuxt_component_4 } from './defineShortcuts-GScxOI4F.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_1$1, b as __nuxt_component_2$2 } from './Input-Cio2Y64Y.mjs';
import { _ as __nuxt_component_8 } from './Textarea-B1Ez_41h.mjs';
import { defineComponent, toRef, computed, useSSRContext, ref, isRef, withCtx, createTextVNode, unref, createVNode, toDisplayString, mergeProps } from 'vue';
import { u as useFormGroup, B as BASE_URL, C as CDN_URL } from './baseUrl-Ds9Li2ud.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
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

const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.select, select);
const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_2$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object],
      default: ""
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: () => config.default.trailingIcon
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: "value"
    },
    selectClass: {
      type: String,
      default: null
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
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("select", toRef(props, "ui"), config, toRef(props, "class"));
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config);
    const size = computed(() => sizeButtonGroup.value || sizeFormGroup.value);
    const onInput = (event) => {
      emit("update:modelValue", event.target.value);
    };
    const onChange = (event) => {
      emitFormChange();
      emit("change", event);
    };
    const guessOptionValue = (option) => {
      return get(option, props.valueAttribute, get(option, props.optionAttribute));
    };
    const guessOptionText = (option) => {
      return get(option, props.optionAttribute, get(option, props.valueAttribute));
    };
    const normalizeOption = (option) => {
      if (["string", "number", "boolean"].includes(typeof option)) {
        return {
          [props.valueAttribute]: option,
          [props.optionAttribute]: option
        };
      }
      return {
        ...option,
        [props.valueAttribute]: guessOptionValue(option),
        [props.optionAttribute]: guessOptionText(option)
      };
    };
    const normalizedOptions = computed(() => {
      return props.options.map((option) => normalizeOption(option));
    });
    const normalizedOptionsWithPlaceholder = computed(() => {
      if (!props.placeholder) {
        return normalizedOptions.value;
      }
      return [
        {
          [props.valueAttribute]: "",
          [props.optionAttribute]: props.placeholder,
          disabled: true
        },
        ...normalizedOptions.value
      ];
    });
    const normalizedValue = computed(() => {
      const normalizeModelValue = normalizeOption(props.modelValue);
      const foundOption = normalizedOptionsWithPlaceholder.value.find((option) => option[props.valueAttribute] === normalizeModelValue[props.valueAttribute]);
      if (!foundOption) {
        return "";
      }
      return foundOption[props.valueAttribute];
    });
    const selectClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.placeholder && !props.modelValue && ui.value.placeholder, props.selectClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      normalizedOptionsWithPlaceholder,
      normalizedValue,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))} data-v-b8160cf8><select${ssrRenderAttrs(mergeProps({
    id: _ctx.inputId,
    name: _ctx.name,
    value: _ctx.modelValue,
    required: _ctx.required,
    disabled: _ctx.disabled,
    class: _ctx.selectClass
  }, _ctx.attrs))} data-v-b8160cf8><!--[-->`);
  ssrRenderList(_ctx.normalizedOptionsWithPlaceholder, (option, index) => {
    _push(`<!--[-->`);
    if (option.children) {
      _push(`<optgroup${ssrRenderAttr("value", option[_ctx.valueAttribute])}${ssrRenderAttr("label", option[_ctx.optionAttribute])} data-v-b8160cf8><!--[-->`);
      ssrRenderList(option.children, (childOption, index2) => {
        _push(`<option${ssrRenderAttr("value", childOption[_ctx.valueAttribute])}${ssrIncludeBooleanAttr(childOption[_ctx.valueAttribute] === _ctx.normalizedValue) ? " selected" : ""}${ssrIncludeBooleanAttr(childOption.disabled) ? " disabled" : ""} data-v-b8160cf8>${ssrInterpolate(childOption[_ctx.optionAttribute])}</option>`);
      });
      _push(`<!--]--></optgroup>`);
    } else {
      _push(`<option${ssrRenderAttr("value", option[_ctx.valueAttribute])}${ssrIncludeBooleanAttr(option[_ctx.valueAttribute] === _ctx.normalizedValue) ? " selected" : ""}${ssrIncludeBooleanAttr(option.disabled) ? " disabled" : ""} data-v-b8160cf8>${ssrInterpolate(option[_ctx.optionAttribute])}</option>`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></select>`);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}" data-v-b8160cf8>`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}" data-v-b8160cf8>`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.14.2_nuxt@3.11.0_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui/dist/runtime/components/forms/Select.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b8160cf8"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
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
    let bookFile = ref(null);
    const columns = [
      {
        key: "name",
        label: "Nomi"
      },
      {
        key: "photo_url",
        label: "Rasm"
      },
      {
        key: "description",
        label: "Batafsil"
      },
      {
        key: "author",
        label: "Yozuvchi"
      },
      {
        key: "price",
        label: "Narxi"
      },
      {
        key: "category",
        label: "Kategoriyasi"
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
          click: () => editBook(row)
        },
        {
          label: "O'chirish",
          icon: "i-heroicons-trash-20-solid",
          click: () => deleteBook(row._id)
        }
      ],
      [
        {
          label: "Yuklab Olish(Kitob)",
          icon: "i-heroicons-archive-box-arrow-down",
          click: () => downloadBook(row.book_url, row.name)
        },
        {
          label: "Yuklab Olish(Audio)",
          icon: "i-heroicons-archive-box-arrow-down",
          click: () => downloadBookAudio(row.book_audio_url, row.name)
        }
      ]
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
            price: price.value
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        const getData = await $fetch(BASE_URL + "/books", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
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
    const downloadBook = async (bookUrl, name2) => {
      const response = await fetch(bookUrl);
      const blob = await response.blob();
      const url = (void 0).URL.createObjectURL(blob);
      const a = (void 0).createElement("a");
      a.href = url;
      a.download = `${name2}.pdf`;
      a.click();
    };
    const downloadBookAudio = async (bookAudioUrl, name2) => {
      const response = await fetch(bookAudioUrl);
      const blob = await response.blob();
      const url = (void 0).URL.createObjectURL(blob);
      const a = (void 0).createElement("a");
      a.href = url;
      a.download = `${name2}.mp3`;
      a.click();
    };
    const deleteBook = async (id) => {
      isLoading.value = true;
      try {
        const data = await $fetch(BASE_URL + "/books/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        if (data.status === 200) {
          toast.add({ title: data.message });
          const res = await $fetch(BASE_URL + "/books", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
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
          body: formdata
        });
        formdata = new FormData();
        formdata.append("file", bookFile.value);
        const fileBookRes = await $fetch(CDN_URL + "/upload", {
          method: "POST",
          body: formdata
        });
        const fetchBanner = await $fetch(BASE_URL + "/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({
            photo_url: photoUrlRes.data.fileUrl,
            book_url: fileBookRes.data.fileUrl,
            name: name.value,
            description: description.value,
            author: author.value,
            category: category.value,
            price: price.value
          })
        });
        isOpen.value = false;
        toast.add({ title: fetchBanner.message });
        const res = await $fetch(BASE_URL + "/books", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
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
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      const _component_UTable = __nuxt_component_0;
      const _component_UDropdown = __nuxt_component_1;
      const _component_UModal = __nuxt_component_3;
      const _component_UCard = __nuxt_component_4;
      const _component_UForm = __nuxt_component_0$1;
      const _component_UFormGroup = __nuxt_component_1$1;
      const _component_UInput = __nuxt_component_2$2;
      const _component_UTextarea = __nuxt_component_8;
      const _component_USelect = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-2xl font-bold">Kitoblar</div><div class="shadow-2xl border border-gray-300 dark:border-gray-500 items-center my-4"><div class="flex p-4 justify-end">`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "lg",
        onClick: ($event) => isRef(isOpen) ? isOpen.value = true : isOpen = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kitob Qo&#39;shish`);
          } else {
            return [
              createTextVNode("Kitob Qo'shish")
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
        rows: unref(banners),
        "empty-state": {
          icon: "i-heroicons-circle-stack-20-solid",
          label: "Bannerlar Mavjud Emas"
        }
      }, {
        "description-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="whitespace-pre-line w-[300px]"${_scopeId}>${ssrInterpolate(row.description)}</div>`);
          } else {
            return [
              createVNode("div", { class: "whitespace-pre-line w-[300px]" }, toDisplayString(row.description), 1)
            ];
          }
        }),
        "price-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(row.price))} so&#39;m</div>`);
          } else {
            return [
              createVNode("div", null, toDisplayString(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(row.price)) + " so'm", 1)
            ];
          }
        }),
        "photo_url-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", row.photo_url)} alt="" class="max-w-[100px]"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: row.photo_url,
                alt: "",
                class: "max-w-[100px]"
              }, null, 8, ["src"])
            ];
          }
        }),
        "category-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>${ssrInterpolate(row.category.name)}</div>`);
          } else {
            return [
              createVNode("div", null, toDisplayString(row.category.name), 1)
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
              label: "Kitob Qo'shish",
              onClick: ($event) => isRef(isOpen) ? isOpen.value = true : isOpen = true
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-center py-6 gap-3" }, [
                createVNode("span", { class: "italic text-sm" }, "Ma'lumot Mavjud Emas"),
                createVNode(_component_UButton, {
                  label: "Kitob Qo'shish",
                  onClick: ($event) => isRef(isOpen) ? isOpen.value = true : isOpen = true
                }, null, 8, ["onClick"])
              ])
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
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}> Kitob Qo&#39;shish </h3>`);
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
                      createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Kitob Qo'shish "),
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
                  _push3(ssrRenderComponent(_component_UForm, { onSubmit: addBanner }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Nomi",
                          size: "lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(name),
                                "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : name = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(name),
                                  "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Rasmi",
                          size: "lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "file",
                                size: "lg",
                                onChange: bookPhotoChange
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "file",
                                  size: "lg",
                                  onChange: bookPhotoChange
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Haqida",
                          name: "photo"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UTextarea, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(description),
                                "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : description = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UTextarea, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(description),
                                  "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Muallifi",
                          name: "photo"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(author),
                                "onUpdate:modelValue": ($event) => isRef(author) ? author.value = $event : author = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(author),
                                  "onUpdate:modelValue": ($event) => isRef(author) ? author.value = $event : author = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Kategoriyasi",
                          name: "photo"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_USelect, {
                                type: "text",
                                size: "lg",
                                options: unref(categories),
                                "option-attribute": "name",
                                "value-attribute": "_id",
                                modelValue: unref(category),
                                "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : category = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_USelect, {
                                  type: "text",
                                  size: "lg",
                                  options: unref(categories),
                                  "option-attribute": "name",
                                  "value-attribute": "_id",
                                  modelValue: unref(category),
                                  "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : category = $event
                                }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Narxi",
                          name: "photo"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "number",
                                size: "lg",
                                modelValue: unref(price),
                                "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : price = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "number",
                                  size: "lg",
                                  modelValue: unref(price),
                                  "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : price = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob PDF fayli",
                          name: "photo"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "file",
                                size: "lg",
                                onChange: handleFileChange
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "file",
                                  size: "lg",
                                  onChange: handleFileChange
                                })
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
                            label: "Kitob Nomi",
                            size: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(name),
                                "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : name = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Kitob Rasmi",
                            size: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "file",
                                size: "lg",
                                onChange: bookPhotoChange
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Kitob Haqida",
                            name: "photo"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UTextarea, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(description),
                                "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : description = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Kitob Muallifi",
                            name: "photo"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(author),
                                "onUpdate:modelValue": ($event) => isRef(author) ? author.value = $event : author = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Kitob Kategoriyasi",
                            name: "photo"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_USelect, {
                                type: "text",
                                size: "lg",
                                options: unref(categories),
                                "option-attribute": "name",
                                "value-attribute": "_id",
                                modelValue: unref(category),
                                "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : category = $event
                              }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Kitob Narxi",
                            name: "photo"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "number",
                                size: "lg",
                                modelValue: unref(price),
                                "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : price = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Kitob PDF fayli",
                            name: "photo"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "file",
                                size: "lg",
                                onChange: handleFileChange
                              })
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
                    createVNode(_component_UForm, { onSubmit: addBanner }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Nomi",
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(name),
                              "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Rasmi",
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "file",
                              size: "lg",
                              onChange: bookPhotoChange
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Haqida",
                          name: "photo"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UTextarea, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(description),
                              "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : description = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Muallifi",
                          name: "photo"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(author),
                              "onUpdate:modelValue": ($event) => isRef(author) ? author.value = $event : author = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Kategoriyasi",
                          name: "photo"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_USelect, {
                              type: "text",
                              size: "lg",
                              options: unref(categories),
                              "option-attribute": "name",
                              "value-attribute": "_id",
                              modelValue: unref(category),
                              "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : category = $event
                            }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Narxi",
                          name: "photo"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "number",
                              size: "lg",
                              modelValue: unref(price),
                              "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : price = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob PDF fayli",
                          name: "photo"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "file",
                              size: "lg",
                              onChange: handleFileChange
                            })
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
                    createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Kitob Qo'shish "),
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
                  createVNode(_component_UForm, { onSubmit: addBanner }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Kitob Nomi",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(name),
                            "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Kitob Rasmi",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "file",
                            size: "lg",
                            onChange: bookPhotoChange
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Kitob Haqida",
                        name: "photo"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UTextarea, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(description),
                            "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : description = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Kitob Muallifi",
                        name: "photo"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(author),
                            "onUpdate:modelValue": ($event) => isRef(author) ? author.value = $event : author = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Kitob Kategoriyasi",
                        name: "photo"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelect, {
                            type: "text",
                            size: "lg",
                            options: unref(categories),
                            "option-attribute": "name",
                            "value-attribute": "_id",
                            modelValue: unref(category),
                            "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : category = $event
                          }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Kitob Narxi",
                        name: "photo"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "number",
                            size: "lg",
                            modelValue: unref(price),
                            "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : price = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Kitob PDF fayli",
                        name: "photo"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "file",
                            size: "lg",
                            onChange: handleFileChange
                          })
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
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpenEdit),
        "onUpdate:modelValue": ($event) => isRef(isOpenEdit) ? isOpenEdit.value = $event : isOpenEdit = $event,
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
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}> Kitob Qo&#39;shish </h3>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-x-mark-20-solid",
                    class: "-my-1",
                    onClick: ($event) => isRef(isOpenEdit) ? isOpenEdit.value = false : isOpenEdit = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Kitob Qo'shish "),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "ghost",
                        icon: "i-heroicons-x-mark-20-solid",
                        class: "-my-1",
                        onClick: ($event) => isRef(isOpenEdit) ? isOpenEdit.value = false : isOpenEdit = false
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, { onSubmit: handleEditBook }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Nomi",
                          size: "lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(name),
                                "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : name = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(name),
                                  "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Haqida",
                          name: "photo"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UTextarea, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(description),
                                "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : description = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UTextarea, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(description),
                                  "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Muallifi",
                          name: "photo"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(author),
                                "onUpdate:modelValue": ($event) => isRef(author) ? author.value = $event : author = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(author),
                                  "onUpdate:modelValue": ($event) => isRef(author) ? author.value = $event : author = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Kategoriyasi",
                          name: "photo"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_USelect, {
                                type: "text",
                                size: "lg",
                                options: unref(categories),
                                "option-attribute": "name",
                                "value-attribute": "_id",
                                modelValue: unref(category),
                                "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : category = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_USelect, {
                                  type: "text",
                                  size: "lg",
                                  options: unref(categories),
                                  "option-attribute": "name",
                                  "value-attribute": "_id",
                                  modelValue: unref(category),
                                  "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : category = $event
                                }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Narxi",
                          name: "photo"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "number",
                                size: "lg",
                                modelValue: unref(price),
                                "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : price = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "number",
                                  size: "lg",
                                  modelValue: unref(price),
                                  "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : price = $event
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
                            label: "Kitob Nomi",
                            size: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(name),
                                "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : name = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Kitob Haqida",
                            name: "photo"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UTextarea, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(description),
                                "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : description = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Kitob Muallifi",
                            name: "photo"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(author),
                                "onUpdate:modelValue": ($event) => isRef(author) ? author.value = $event : author = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Kitob Kategoriyasi",
                            name: "photo"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_USelect, {
                                type: "text",
                                size: "lg",
                                options: unref(categories),
                                "option-attribute": "name",
                                "value-attribute": "_id",
                                modelValue: unref(category),
                                "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : category = $event
                              }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Kitob Narxi",
                            name: "photo"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "number",
                                size: "lg",
                                modelValue: unref(price),
                                "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : price = $event
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
                    createVNode(_component_UForm, { onSubmit: handleEditBook }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Nomi",
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(name),
                              "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Haqida",
                          name: "photo"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UTextarea, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(description),
                              "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : description = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Muallifi",
                          name: "photo"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(author),
                              "onUpdate:modelValue": ($event) => isRef(author) ? author.value = $event : author = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Kategoriyasi",
                          name: "photo"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_USelect, {
                              type: "text",
                              size: "lg",
                              options: unref(categories),
                              "option-attribute": "name",
                              "value-attribute": "_id",
                              modelValue: unref(category),
                              "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : category = $event
                            }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Narxi",
                          name: "photo"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "number",
                              size: "lg",
                              modelValue: unref(price),
                              "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : price = $event
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
                    createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Kitob Qo'shish "),
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-x-mark-20-solid",
                      class: "-my-1",
                      onClick: ($event) => isRef(isOpenEdit) ? isOpenEdit.value = false : isOpenEdit = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, { onSubmit: handleEditBook }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Kitob Nomi",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(name),
                            "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Kitob Haqida",
                        name: "photo"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UTextarea, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(description),
                            "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : description = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Kitob Muallifi",
                        name: "photo"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(author),
                            "onUpdate:modelValue": ($event) => isRef(author) ? author.value = $event : author = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Kitob Kategoriyasi",
                        name: "photo"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelect, {
                            type: "text",
                            size: "lg",
                            options: unref(categories),
                            "option-attribute": "name",
                            "value-attribute": "_id",
                            modelValue: unref(category),
                            "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : category = $event
                          }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Kitob Narxi",
                        name: "photo"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "number",
                            size: "lg",
                            modelValue: unref(price),
                            "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : price = $event
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/books/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-rer8kSw7.mjs.map
