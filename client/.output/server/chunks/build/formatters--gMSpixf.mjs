import { defineComponent, toRef, computed, useSSRContext, ref, provide, onMounted, onUnmounted, watchEffect, nextTick, watch, toRaw, inject, cloneVNode, h as h$1, Fragment, mergeProps, resolveComponent, withCtx, renderSlot, createVNode, resolveDynamicComponent, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, renderList, withModifiers, Transition } from 'vue';
import { y as arrow$1, m as mergeConfig, e as appConfig, g as useUI, t as twMerge, i as twJoin, f as __nuxt_component_2$1, d as __nuxt_component_2$2, q as defu, j as get, z as __nuxt_component_1$1, A as getNuxtLinkProps, _ as _export_sfc, a as __nuxt_component_0$2 } from './server.mjs';
import { u as useFormGroup, c as useId, g as useVModel } from './baseUrl-dUKJsST4.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderAttr, ssrRenderSlot, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderVNode } from 'vue/server-renderer';

const table = {
  wrapper: "relative overflow-x-auto",
  base: "min-w-full table-fixed",
  divide: "divide-y divide-gray-300 dark:divide-gray-700",
  thead: "relative",
  tbody: "divide-y divide-gray-200 dark:divide-gray-800",
  tr: {
    base: "",
    selected: "bg-gray-50 dark:bg-gray-800/50",
    active: "hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"
  },
  th: {
    base: "text-left rtl:text-right",
    padding: "px-4 py-3.5",
    color: "text-gray-900 dark:text-white",
    font: "font-semibold",
    size: "text-sm"
  },
  td: {
    base: "whitespace-nowrap",
    padding: "px-4 py-4",
    color: "text-gray-500 dark:text-gray-400",
    font: "",
    size: "text-sm"
  },
  checkbox: {
    padding: "ps-4"
  },
  loadingState: {
    wrapper: "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"
  },
  emptyState: {
    wrapper: "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"
  },
  progress: {
    wrapper: "absolute inset-x-0 -bottom-[0.5px] p-0"
  },
  default: {
    sortAscIcon: "i-heroicons-bars-arrow-up-20-solid",
    sortDescIcon: "i-heroicons-bars-arrow-down-20-solid",
    sortButton: {
      icon: "i-heroicons-arrows-up-down-20-solid",
      trailing: true,
      square: true,
      color: "gray",
      variant: "ghost",
      class: "-m-1.5"
    },
    progress: {
      color: "primary",
      animation: "carousel"
    },
    loadingState: {
      icon: "i-heroicons-arrow-path-20-solid",
      label: "Loading..."
    },
    emptyState: {
      icon: "i-heroicons-circle-stack-20-solid",
      label: "No items."
    }
  }
};
const dropdown = {
  wrapper: "relative inline-flex text-left rtl:text-right",
  container: "z-20 group",
  trigger: "inline-flex w-full",
  width: "w-48",
  height: "",
  background: "bg-white dark:bg-gray-800",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  base: "relative focus:outline-none overflow-y-auto scroll-py-1",
  divide: "divide-y divide-gray-200 dark:divide-gray-700",
  padding: "p-1",
  item: {
    base: "group flex items-center gap-1.5 w-full",
    rounded: "rounded-md",
    padding: "px-1.5 py-1.5",
    size: "text-sm",
    active: "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white",
    inactive: "text-gray-700 dark:text-gray-200",
    disabled: "cursor-not-allowed opacity-50",
    icon: {
      base: "flex-shrink-0 w-5 h-5",
      active: "text-gray-500 dark:text-gray-400",
      inactive: "text-gray-400 dark:text-gray-500"
    },
    avatar: {
      base: "flex-shrink-0",
      size: "2xs"
    },
    label: "truncate",
    shortcuts: "hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transition duration-100 ease-out",
    enterFromClass: "transform scale-95 opacity-0",
    enterToClass: "transform scale-100 opacity-100",
    leaveActiveClass: "transition duration-75 ease-in",
    leaveFromClass: "transform scale-100 opacity-100",
    leaveToClass: "transform scale-95 opacity-0"
  },
  popper: {
    placement: "bottom-end",
    strategy: "fixed"
  },
  default: {
    openDelay: 0,
    closeDelay: 0
  },
  arrow: {
    ...arrow$1,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
const kbd = {
  base: "inline-flex items-center justify-center text-gray-900 dark:text-white",
  padding: "px-1",
  size: {
    xs: "h-4 min-w-[16px] text-[10px]",
    sm: "h-5 min-w-[20px] text-[11px]",
    md: "h-6 min-w-[24px] text-[12px]"
  },
  rounded: "rounded",
  font: "font-medium font-sans",
  background: "bg-gray-100 dark:bg-gray-800",
  ring: "ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",
  default: {
    size: "sm"
  }
};
const progress = {
  wrapper: "w-full flex flex-col gap-2",
  indicator: {
    container: {
      base: "flex flex-row justify-end",
      width: "min-w-fit",
      transition: "transition-all"
    },
    align: "text-end",
    width: "w-fit",
    color: "text-gray-400 dark:text-gray-500",
    size: {
      "2xs": "text-xs",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-sm",
      lg: "text-sm",
      xl: "text-base",
      "2xl": "text-base"
    }
  },
  progress: {
    base: "block appearance-none border-none overflow-hidden",
    width: "w-full [&::-webkit-progress-bar]:w-full",
    size: {
      "2xs": "h-px",
      xs: "h-0.5",
      sm: "h-1",
      md: "h-2",
      lg: "h-3",
      xl: "h-4",
      "2xl": "h-5"
    },
    rounded: "rounded-full [&::-webkit-progress-bar]:rounded-full",
    track: "[&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:dark:bg-gray-700 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:dark:bg-gray-700",
    bar: "[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full",
    color: "text-{color}-500 dark:text-{color}-400",
    background: "[&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current",
    indeterminate: {
      base: "indeterminate:relative",
      rounded: "indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
    }
  },
  steps: {
    base: "grid grid-cols-1",
    color: "text-{color}-500 dark:text-{color}-400",
    size: {
      "2xs": "text-xs",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-sm",
      lg: "text-sm",
      xl: "text-base",
      "2xl": "text-base"
    }
  },
  step: {
    base: "transition-all opacity-0 truncate row-start-1 col-start-1",
    align: "text-end",
    active: "opacity-100",
    first: "text-gray-500 dark:text-gray-400"
  },
  animation: {
    carousel: "bar-animation-carousel",
    "carousel-inverse": "bar-animation-carousel-inverse",
    swing: "bar-animation-swing",
    elastic: "bar-animation-elastic"
  },
  default: {
    color: "primary",
    size: "md",
    animation: "carousel"
  }
};
const checkbox = {
  wrapper: "relative flex items-start",
  container: "flex items-center h-5",
  base: "h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",
  form: "form-checkbox",
  rounded: "rounded",
  color: "text-{color}-500 dark:text-{color}-400",
  background: "bg-white dark:bg-gray-900",
  border: "border border-gray-300 dark:border-gray-700",
  ring: "focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
  inner: "ms-3 flex flex-col",
  label: "text-sm font-medium text-gray-700 dark:text-gray-200",
  required: "text-sm text-red-500 dark:text-red-400",
  help: "text-sm text-gray-500 dark:text-gray-400",
  default: {
    color: "primary"
  }
};
const config$4 = mergeConfig(appConfig.ui.strategy, appConfig.ui.checkbox, checkbox);
const _sfc_main$4 = defineComponent({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: () => null
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    modelValue: {
      type: [Boolean, Array],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: void 0
    },
    help: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: () => config$4.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    inputClass: {
      type: String,
      default: ""
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
  setup(props, { emit }) {
    var _a;
    const { ui, attrs } = useUI("checkbox", toRef(props, "ui"), config$4, toRef(props, "class"));
    const { emitFormChange, color, name, inputId: _inputId } = useFormGroup(props);
    const inputId = (_a = _inputId.value) != null ? _a : useId("$nXLe5Zw6ZB");
    const toggle = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const onChange = (event) => {
      emit("change", event);
      emitFormChange();
    };
    const inputClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        ui.value.rounded,
        ui.value.background,
        ui.value.border,
        color.value && ui.value.ring.replaceAll("{color}", color.value),
        color.value && ui.value.color.replaceAll("{color}", color.value)
      ), props.inputClass);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      toggle,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      onChange
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><div class="${ssrRenderClass(_ctx.ui.container)}"><input${ssrRenderAttrs((_temp0 = mergeProps({
    id: _ctx.inputId,
    checked: Array.isArray(_ctx.toggle) ? ssrLooseContain(_ctx.toggle, _ctx.value) : _ctx.toggle,
    name: _ctx.name,
    required: _ctx.required,
    value: _ctx.value,
    disabled: _ctx.disabled,
    indeterminate: _ctx.indeterminate,
    type: "checkbox",
    class: _ctx.inputClass
  }, _ctx.attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, _ctx.toggle))))}></div>`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.inner)}"><label${ssrRenderAttr("for", _ctx.inputId)} class="${ssrRenderClass(_ctx.ui.label)}">`);
    ssrRenderSlot(_ctx.$slots, "label", {}, () => {
      _push(`${ssrInterpolate(_ctx.label)}`);
    }, _push, _parent);
    if (_ctx.required) {
      _push(`<span class="${ssrRenderClass(_ctx.ui.required)}">*</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</label>`);
    if (_ctx.help) {
      _push(`<p class="${ssrRenderClass(_ctx.ui.help)}">${ssrInterpolate(_ctx.help)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.14.2_nuxt@3.11.0_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui/dist/runtime/components/forms/Checkbox.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const config$3 = mergeConfig(appConfig.ui.strategy, appConfig.ui.progress, progress);
const _sfc_main$3 = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: Number,
      default: null
    },
    max: {
      type: [Number, Array],
      default: 100
    },
    indicator: {
      type: Boolean,
      default: false
    },
    animation: {
      type: String,
      default: () => config$3.default.animation,
      validator(value) {
        return Object.keys(config$3.animation).includes(value);
      }
    },
    size: {
      type: String,
      default: () => config$3.default.size,
      validator(value) {
        return Object.keys(config$3.progress.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$3.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
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
  setup(props) {
    const { ui, attrs } = useUI("progress", toRef(props, "ui"), config$3, toRef(props, "class"));
    const indicatorContainerClass = computed(() => {
      return twJoin(
        ui.value.indicator.container.base,
        ui.value.indicator.container.width,
        ui.value.indicator.container.transition
      );
    });
    const indicatorClass = computed(() => {
      return twJoin(
        ui.value.indicator.align,
        ui.value.indicator.width,
        ui.value.indicator.color,
        ui.value.indicator.size[props.size]
      );
    });
    const progressClass = computed(() => {
      var _a;
      const classes = [
        ui.value.progress.base,
        ui.value.progress.width,
        ui.value.progress.size[props.size],
        ui.value.progress.rounded,
        ui.value.progress.track,
        ui.value.progress.bar,
        // Intermediate class to allow thumb ring or background color (set to `current`) as it's impossible to safelist with arbitrary values
        (_a = ui.value.progress.color) == null ? void 0 : _a.replaceAll("{color}", props.color),
        ui.value.progress.background,
        ui.value.progress.indeterminate.base,
        ui.value.progress.indeterminate.rounded
      ];
      if (isIndeterminate.value) {
        classes.push(ui.value.animation[props.animation]);
      }
      return twJoin(...classes);
    });
    const stepsClass = computed(() => {
      var _a;
      return twJoin(
        ui.value.steps.base,
        (_a = ui.value.steps.color) == null ? void 0 : _a.replaceAll("{color}", props.color),
        ui.value.steps.size[props.size]
      );
    });
    const stepClass = computed(() => {
      return twJoin(
        ui.value.step.base,
        ui.value.step.align
      );
    });
    const stepActiveClass = computed(() => {
      return twJoin(
        ui.value.step.active
      );
    });
    const stepFirstClass = computed(() => {
      return twJoin(
        ui.value.step.first
      );
    });
    function isActive(index) {
      return index === Number(props.value);
    }
    function isFirst(index) {
      return index === 0;
    }
    function stepClasses(index) {
      index = Number(index);
      const classes = [stepClass.value];
      if (isFirst(index)) {
        classes.push(stepFirstClass.value);
      }
      if (isActive(index)) {
        classes.push(stepActiveClass.value);
      }
      return classes.join(" ");
    }
    const isIndeterminate = computed(() => props.value === void 0 || props.value === null);
    const isSteps = computed(() => Array.isArray(props.max));
    const realMax = computed(() => {
      if (isIndeterminate.value) {
        return null;
      }
      if (Array.isArray(props.max)) {
        return props.max.length - 1;
      }
      return Number(props.max);
    });
    const percent = computed(() => {
      if (isIndeterminate.value) {
        return void 0;
      }
      switch (true) {
        case props.value < 0:
          return 0;
        case props.value > realMax.value:
          return 100;
        default:
          return props.value / realMax.value * 100;
      }
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      indicatorContainerClass,
      indicatorClass,
      progressClass,
      stepsClass,
      stepClasses,
      isIndeterminate,
      isSteps,
      realMax,
      percent
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))} data-v-3212221a>`);
  if (_ctx.indicator || _ctx.$slots.indicator) {
    ssrRenderSlot(_ctx.$slots, "indicator", { percent: _ctx.percent }, () => {
      if (!_ctx.isSteps) {
        _push(`<div class="${ssrRenderClass(_ctx.indicatorContainerClass)}" style="${ssrRenderStyle({ width: `${_ctx.percent}%` })}" data-v-3212221a><div class="${ssrRenderClass(_ctx.indicatorClass)}" data-v-3212221a>${ssrInterpolate(Math.round(_ctx.percent))}% </div></div>`);
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`<progress${ssrRenderAttrs(mergeProps({ class: _ctx.progressClass }, { value: _ctx.value, max: _ctx.realMax }))} data-v-3212221a>${ssrInterpolate(_ctx.percent !== void 0 ? `${Math.round(_ctx.percent)}%` : void 0)}</progress>`);
  if (_ctx.isSteps) {
    _push(`<div class="${ssrRenderClass(_ctx.stepsClass)}" data-v-3212221a><!--[-->`);
    ssrRenderList(_ctx.max, (step, index) => {
      _push(`<div class="${ssrRenderClass(_ctx.stepClasses(index))}" data-v-3212221a>`);
      ssrRenderSlot(_ctx.$slots, `step-${index}`, { step }, () => {
        _push(`${ssrInterpolate(step)}`);
      }, _push, _parent);
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.14.2_nuxt@3.11.0_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui/dist/runtime/components/elements/Progress.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-3212221a"]]);
function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.table, table);
function defaultComparator(a2, z) {
  return a2 === z;
}
function defaultSort(a2, b2, direction) {
  if (a2 === b2) {
    return 0;
  }
  if (direction === "asc") {
    return a2 < b2 ? -1 : 1;
  } else {
    return a2 > b2 ? -1 : 1;
  }
}
const _sfc_main$2 = defineComponent({
  components: {
    UIcon: __nuxt_component_2$1,
    UButton: __nuxt_component_2$2,
    UProgress: __nuxt_component_2,
    UCheckbox: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Array,
      default: null
    },
    by: {
      type: [String, Function],
      default: () => defaultComparator
    },
    rows: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: null
    },
    columnAttribute: {
      type: String,
      default: "label"
    },
    sort: {
      type: Object,
      default: () => ({})
    },
    sortMode: {
      type: String,
      default: "auto"
    },
    sortButton: {
      type: Object,
      default: () => config$2.default.sortButton
    },
    sortAscIcon: {
      type: String,
      default: () => config$2.default.sortAscIcon
    },
    sortDescIcon: {
      type: String,
      default: () => config$2.default.sortDescIcon
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingState: {
      type: Object,
      default: () => config$2.default.loadingState
    },
    emptyState: {
      type: Object,
      default: () => config$2.default.emptyState
    },
    progress: {
      type: Object,
      default: () => config$2.default.progress
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
  emits: ["update:modelValue", "update:sort"],
  setup(props, { emit, attrs: $attrs }) {
    const { ui, attrs } = useUI("table", toRef(props, "ui"), config$2, toRef(props, "class"));
    const columns = computed(() => {
      var _a, _b;
      return (_b = props.columns) != null ? _b : Object.keys((_a = props.rows[0]) != null ? _a : {}).map((key) => ({ key, label: upperFirst(key), sortable: false, class: void 0, sort: defaultSort }));
    });
    const sort = useVModel(props, "sort", emit, { passive: true, defaultValue: defu({}, props.sort, { column: null, direction: "asc" }) });
    const savedSort = { column: sort.value.column, direction: null };
    const rows = computed(() => {
      var _a;
      if (!((_a = sort.value) == null ? void 0 : _a.column) || props.sortMode === "manual") {
        return props.rows;
      }
      const { column, direction } = sort.value;
      return props.rows.slice().sort((a2, b2) => {
        var _a3;
        var _a2;
        const aValue = get(a2, column);
        const bValue = get(b2, column);
        const sort2 = (_a3 = (_a2 = columns.value.find((col) => col.key === column)) == null ? void 0 : _a2.sort) != null ? _a3 : defaultSort;
        return sort2(aValue, bValue, direction);
      });
    });
    const selected = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const indeterminate = computed(() => selected.value && selected.value.length > 0 && selected.value.length < props.rows.length);
    const emptyState = computed(() => {
      if (props.emptyState === null)
        return null;
      return { ...ui.value.default.emptyState, ...props.emptyState };
    });
    const loadingState = computed(() => {
      if (props.loadingState === null)
        return null;
      return { ...ui.value.default.loadingState, ...props.loadingState };
    });
    function compare(a2, z) {
      if (typeof props.by === "string") {
        const property = props.by;
        return (a2 == null ? void 0 : a2[property]) === (z == null ? void 0 : z[property]);
      }
      return props.by(a2, z);
    }
    function isSelected(row) {
      if (!props.modelValue) {
        return false;
      }
      return selected.value.some((item) => compare(toRaw(item), toRaw(row)));
    }
    function onSort(column) {
      if (sort.value.column === column.key) {
        const direction = !column.direction || column.direction === "asc" ? "desc" : "asc";
        if (sort.value.direction === direction) {
          sort.value = defu({}, savedSort, { column: null, direction: "asc" });
        } else {
          sort.value = { column: sort.value.column, direction: sort.value.direction === "asc" ? "desc" : "asc" };
        }
      } else {
        sort.value = { column: column.key, direction: column.direction || "asc" };
      }
    }
    function onSelect(row) {
      if (!$attrs.onSelect) {
        return;
      }
      $attrs.onSelect(row);
    }
    function selectAllRows() {
      props.rows.forEach((row) => {
        if (isSelected(row)) {
          return;
        }
        selected.value.push(row);
      });
    }
    function onChange(event) {
      if (event.target.checked) {
        selectAllRows();
      } else {
        selected.value = [];
      }
    }
    function getRowData(row, rowKey, defaultValue = "") {
      return get(row, rowKey, defaultValue);
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      sort,
      // eslint-disable-next-line vue/no-dupe-keys
      columns,
      // eslint-disable-next-line vue/no-dupe-keys
      rows,
      selected,
      indeterminate,
      // eslint-disable-next-line vue/no-dupe-keys
      emptyState,
      // eslint-disable-next-line vue/no-dupe-keys
      loadingState,
      isSelected,
      onSort,
      onSelect,
      onChange,
      getRowData
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UCheckbox = __nuxt_component_0$1;
  const _component_UButton = __nuxt_component_2$2;
  const _component_UProgress = __nuxt_component_2;
  const _component_UIcon = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><table class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.divide])}"><thead class="${ssrRenderClass(_ctx.ui.thead)}"><tr class="${ssrRenderClass(_ctx.ui.tr.base)}">`);
  if (_ctx.modelValue) {
    _push(`<th scope="col" class="${ssrRenderClass(_ctx.ui.checkbox.padding)}">`);
    _push(ssrRenderComponent(_component_UCheckbox, {
      "model-value": _ctx.indeterminate || _ctx.selected.length === _ctx.rows.length,
      indeterminate: _ctx.indeterminate,
      "aria-label": "Select all",
      onChange: _ctx.onChange
    }, null, _parent));
    _push(`</th>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList(_ctx.columns, (column, index) => {
    _push(`<th scope="col" class="${ssrRenderClass([_ctx.ui.th.base, _ctx.ui.th.padding, _ctx.ui.th.color, _ctx.ui.th.font, _ctx.ui.th.size, column.class])}">`);
    ssrRenderSlot(_ctx.$slots, `${column.key}-header`, {
      column,
      sort: _ctx.sort,
      onSort: _ctx.onSort
    }, () => {
      if (column.sortable) {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ ..._ctx.ui.default.sortButton || {}, ..._ctx.sortButton }, {
          icon: !_ctx.sort.column || _ctx.sort.column !== column.key ? _ctx.sortButton.icon || _ctx.ui.default.sortButton.icon : _ctx.sort.direction === "asc" ? _ctx.sortAscIcon : _ctx.sortDescIcon,
          label: column[_ctx.columnAttribute],
          onClick: ($event) => _ctx.onSort(column)
        }), null, _parent));
      } else {
        _push(`<span>${ssrInterpolate(column[_ctx.columnAttribute])}</span>`);
      }
    }, _push, _parent);
    _push(`</th>`);
  });
  _push(`<!--]--></tr>`);
  if (_ctx.loading && _ctx.progress) {
    _push(`<tr><td${ssrRenderAttr("colspan", 0)} class="${ssrRenderClass(_ctx.ui.progress.wrapper)}">`);
    _push(ssrRenderComponent(_component_UProgress, mergeProps({ ..._ctx.ui.default.progress || {}, ..._ctx.progress }, { size: "2xs" }), null, _parent));
    _push(`</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</thead><tbody class="${ssrRenderClass(_ctx.ui.tbody)}">`);
  if (_ctx.loadingState && _ctx.loading && !_ctx.rows.length) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "loading-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.loadingState.wrapper)}">`);
      if (_ctx.loadingState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.loadingState.icon,
          class: _ctx.ui.loadingState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.loadingState.label)}">${ssrInterpolate(_ctx.loadingState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else if (_ctx.emptyState && !_ctx.rows.length) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "empty-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.emptyState.wrapper)}">`);
      if (_ctx.emptyState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.emptyState.icon,
          class: _ctx.ui.emptyState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.emptyState.label)}">${ssrInterpolate(_ctx.emptyState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.rows, (row, index) => {
      _push(`<tr class="${ssrRenderClass([_ctx.ui.tr.base, _ctx.isSelected(row) && _ctx.ui.tr.selected, _ctx.$attrs.onSelect && _ctx.ui.tr.active, row == null ? void 0 : row.class])}">`);
      if (_ctx.modelValue) {
        _push(`<td class="${ssrRenderClass(_ctx.ui.checkbox.padding)}">`);
        _push(ssrRenderComponent(_component_UCheckbox, {
          modelValue: _ctx.selected,
          "onUpdate:modelValue": ($event) => _ctx.selected = $event,
          value: row,
          "aria-label": "Select row",
          onClick: () => {
          }
        }, null, _parent));
        _push(`</td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.columns, (column, subIndex) => {
        var _a;
        _push(`<td class="${ssrRenderClass([_ctx.ui.td.base, _ctx.ui.td.padding, _ctx.ui.td.color, _ctx.ui.td.font, _ctx.ui.td.size, (_a = row[column.key]) == null ? void 0 : _a.class])}">`);
        ssrRenderSlot(_ctx.$slots, `${column.key}-data`, {
          column,
          row,
          index,
          getRowData: (defaultValue) => _ctx.getRowData(row, column.key, defaultValue)
        }, () => {
          _push(`${ssrInterpolate(_ctx.getRowData(row, column.key))}`);
        }, _push, _parent);
        _push(`</td>`);
      });
      _push(`<!--]--></tr>`);
    });
    _push(`<!--]-->`);
  }
  _push(`</tbody></table></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.14.2_nuxt@3.11.0_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui/dist/runtime/components/data/Table.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.kbd, kbd);
const _sfc_main$1 = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: () => config$1.default.size,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
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
  setup(props) {
    const { ui, attrs } = useUI("kbd", toRef(props, "ui"), config$1);
    const kbdClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.size[props.size],
        ui.value.padding,
        ui.value.rounded,
        ui.value.font,
        ui.value.background,
        ui.value.ring
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      kbdClass
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<kbd${ssrRenderAttrs(mergeProps({ class: _ctx.kbdClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate(_ctx.value)}`);
  }, _push, _parent);
  _push(`</kbd>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.14.2_nuxt@3.11.0_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui/dist/runtime/components/elements/Kbd.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
let t$2 = Symbol("headlessui.useid"), i$5 = 0;
function I$1() {
  return inject(t$2, () => `${++i$5}`)();
}
function l$1(e) {
  provide(t$2, e);
}
function o$2(e) {
  var l2;
  if (e == null || e.value == null)
    return null;
  let n2 = (l2 = e.value.$el) != null ? l2 : e.value;
  return n2 instanceof Node ? n2 : null;
}
function u$3(r2, n2, ...a2) {
  if (r2 in n2) {
    let e = n2[r2];
    return typeof e == "function" ? e(...a2) : e;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e) => `"${e}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$3), t2;
}
var i$4 = Object.defineProperty;
var d = (t2, e, r2) => e in t2 ? i$4(t2, e, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e] = r2;
var n$2 = (t2, e, r2) => (d(t2, typeof e != "symbol" ? e + "" : e, r2), r2);
let s$2 = class s {
  constructor() {
    n$2(this, "current", this.detect());
    n$2(this, "currentId", 0);
  }
  set(e) {
    this.current !== e && (this.currentId = 0, this.current = e);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
};
let c$2 = new s$2();
function i$3(r2) {
  if (c$2.isServer)
    return null;
  if (r2 instanceof Node)
    return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n2 = o$2(r2);
    if (n2)
      return n2.ownerDocument;
  }
  return void 0;
}
let c$1 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var N$1 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$1 || {}), T$1 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$1 || {}), F = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F || {});
function E(e = (void 0).body) {
  return e == null ? [] : Array.from(e.querySelectorAll(c$1)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function w$2(e, r2 = 0) {
  var t2;
  return e === ((t2 = i$3(e)) == null ? void 0 : t2.body) ? false : u$3(r2, { [0]() {
    return e.matches(c$1);
  }, [1]() {
    let l2 = e;
    for (; l2 !== null; ) {
      if (l2.matches(c$1))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
function _(e) {
  let r2 = i$3(e);
  nextTick(() => {
    r2 && !w$2(r2.activeElement, 0) && S$1(e);
  });
}
var y$1 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$1 || {});
function S$1(e) {
  e == null || e.focus({ preventScroll: true });
}
let H = ["textarea", "input"].join(",");
function I(e) {
  var r2, t2;
  return (t2 = (r2 = e == null ? void 0 : e.matches) == null ? void 0 : r2.call(e, H)) != null ? t2 : false;
}
function O$1(e, r2 = (t2) => t2) {
  return e.slice().sort((t2, l2) => {
    let o2 = r2(t2), i2 = r2(l2);
    if (o2 === null || i2 === null)
      return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v$1(e, r2) {
  return P(E(), r2, { relativeTo: e });
}
function P(e, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
  var m;
  let i2 = (m = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : void 0 : e == null ? void 0 : e.ownerDocument) != null ? m : void 0, n2 = Array.isArray(e) ? t2 ? O$1(e) : e : E(e);
  o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s3) => !o2.includes(s3))), l2 = l2 != null ? l2 : i2.activeElement;
  let x = (() => {
    if (r2 & 5)
      return 1;
    if (r2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = (() => {
    if (r2 & 1)
      return 0;
    if (r2 & 2)
      return Math.max(0, n2.indexOf(l2)) - 1;
    if (r2 & 4)
      return Math.max(0, n2.indexOf(l2)) + 1;
    if (r2 & 8)
      return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L = r2 & 32 ? { preventScroll: true } : {}, a2 = 0, d2 = n2.length, u2;
  do {
    if (a2 >= d2 || a2 + d2 <= 0)
      return 0;
    let s3 = p2 + a2;
    if (r2 & 16)
      s3 = (s3 + d2) % d2;
    else {
      if (s3 < 0)
        return 3;
      if (s3 >= d2)
        return 1;
    }
    u2 = n2[s3], u2 == null || u2.focus(L), a2 += x;
  } while (u2 !== i2.activeElement);
  return r2 & 6 && I(u2) && u2.select(), 2;
}
function t$1() {
  return /iPhone/gi.test((void 0).navigator.platform) || /Mac/gi.test((void 0).navigator.platform) && (void 0).navigator.maxTouchPoints > 0;
}
function i$2() {
  return /Android/gi.test((void 0).navigator.userAgent);
}
function n$1() {
  return t$1() || i$2();
}
function u$2(e, t2, n2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e, t2, n2), o2(() => (void 0).removeEventListener(e, t2, n2));
  });
}
function w$1(e, n2, t2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e, n2, t2), o2(() => (void 0).removeEventListener(e, n2, t2));
  });
}
function w(f2, m, l2 = computed(() => true)) {
  function a2(e, r2) {
    if (!l2.value || e.defaultPrevented)
      return;
    let t2 = r2(e);
    if (t2 === null || !t2.getRootNode().contains(t2))
      return;
    let c2 = function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(f2);
    for (let o2 of c2) {
      if (o2 === null)
        continue;
      let n2 = o2 instanceof HTMLElement ? o2 : o$2(o2);
      if (n2 != null && n2.contains(t2) || e.composed && e.composedPath().includes(n2))
        return;
    }
    return !w$2(t2, h.Loose) && t2.tabIndex !== -1 && e.preventDefault(), m(e, t2);
  }
  let u2 = ref(null);
  u$2("pointerdown", (e) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e.composedPath) == null ? void 0 : r2.call(e)) == null ? void 0 : t2[0]) || e.target);
  }, true), u$2("mousedown", (e) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e.composedPath) == null ? void 0 : r2.call(e)) == null ? void 0 : t2[0]) || e.target);
  }, true), u$2("click", (e) => {
    n$1() || u2.value && (a2(e, () => u2.value), u2.value = null);
  }, true), u$2("touchend", (e) => a2(e, () => e.target instanceof HTMLElement ? e.target : null), true), w$1("blur", (e) => a2(e, () => (void 0).document.activeElement instanceof HTMLIFrameElement ? (void 0).document.activeElement : null), true);
}
function r$1(t2, e) {
  if (t2)
    return t2;
  let n2 = e != null ? e : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button")
    return "button";
}
function s$1(t2, e) {
  let n2 = ref(r$1(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r$1(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var u2;
    n2.value || o$2(e) && o$2(e) instanceof HTMLButtonElement && !((u2 = o$2(e)) != null && u2.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
function r(e) {
  return [e.screenX, e.screenY];
}
function u$1() {
  let e = ref([-1, -1]);
  return { wasMoved(n2) {
    let t2 = r(n2);
    return e.value[0] === t2[0] && e.value[1] === t2[1] ? false : (e.value = t2, true);
  }, update(n2) {
    e.value = r(n2);
  } };
}
function i$1({ container: e, accept: t2, walk: d2, enabled: o2 }) {
  watchEffect(() => {
    let r2 = e.value;
    if (!r2 || o2 !== void 0 && !o2.value)
      return;
    let l2 = i$3(e);
    if (!l2)
      return;
    let c2 = Object.assign((f2) => t2(f2), { acceptNode: t2 }), n2 = l2.createTreeWalker(r2, NodeFilter.SHOW_ELEMENT, c2, false);
    for (; n2.nextNode(); )
      d2(n2.currentNode);
  });
}
var N = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N || {}), S = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(S || {});
function A$1({ visible: r2 = true, features: t2 = 0, ourProps: e, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j(o2, e), l2 = Object.assign(i2, { props: n2 });
  if (r2 || t2 & 2 && n2.static)
    return y(l2);
  if (t2 & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$3(d2, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l2);
}
function y({ props: r2, attrs: t2, slots: e, slot: o2, name: i2 }) {
  var m, h2;
  let { as: n2, ...l2 } = T(r2, ["unmount", "static"]), a2 = (m = e.default) == null ? void 0 : m.call(e, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p2, f2] of Object.entries(o2))
      typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p2);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a2 != null ? a2 : [];
      if (!v(u2) || c2.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g2, R) => R.indexOf(s3) === g2).sort((s3, g2) => s3.localeCompare(g2)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p2 = j((h2 = u2.props) != null ? h2 : {}, l2, d2), f2 = cloneVNode(u2, p2, true);
      for (let s3 in p2)
        s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p2[s3]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h$1(n2, Object.assign({}, l2, d2), { default: () => a2 });
}
function b(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e = {};
  for (let i2 of r2)
    for (let n2 in i2)
      n2.startsWith("on") && typeof i2[n2] == "function" ? (e[n2] != null || (e[n2] = []), e[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e).map((i2) => [i2, void 0])));
  for (let i2 in e)
    Object.assign(t2, { [i2](n2, ...l2) {
      let a2 = e[i2];
      for (let d2 of a2) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d2(n2, ...l2);
      }
    } });
  return t2;
}
function T(r2, t2 = []) {
  let e = Object.assign({}, r2);
  for (let o2 of t2)
    o2 in e && delete e[o2];
  return e;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
let n = Symbol("Context");
var i = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(i || {});
function s2() {
  return l() !== null;
}
function l() {
  return inject(n, null);
}
function t(o2) {
  provide(n, o2);
}
var o$1 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$1 || {});
function u(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c || {});
function f(l2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0)
    return null;
  let r2 = n2.resolveActiveIndex(), s3 = r2 != null ? r2 : -1;
  switch (l2.focus) {
    case 0: {
      for (let e = 0; e < t2.length; ++e)
        if (!n2.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 1: {
      s3 === -1 && (s3 = t2.length);
      for (let e = s3 - 1; e >= 0; --e)
        if (!n2.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 2: {
      for (let e = s3 + 1; e < t2.length; ++e)
        if (!n2.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 3: {
      for (let e = t2.length - 1; e >= 0; --e)
        if (!n2.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 4: {
      for (let e = 0; e < t2.length; ++e)
        if (n2.resolveId(t2[e], e, t2) === l2.id)
          return e;
      return r2;
    }
    case 5:
      return null;
    default:
      u(l2);
  }
}
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e) {
  var r2, i2;
  let n2 = (r2 = e.innerText) != null ? r2 : "", t2 = e.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n2;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f2.remove(), u2 = true;
  let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g(e) {
  let n2 = e.getAttribute("aria-label");
  if (typeof n2 == "string")
    return n2.trim();
  let t2 = e.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = (void 0).getElementById(l2);
      if (r2) {
        let i2 = r2.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0)
      return u2.join(", ");
  }
  return o(e).trim();
}
function p(a2) {
  let t2 = ref(""), r2 = ref("");
  return () => {
    let e = o$2(a2);
    if (!e)
      return "";
    let l2 = e.innerText;
    if (t2.value === l2)
      return r2.value;
    let u2 = g(e).trim().toLowerCase();
    return t2.value = l2, r2.value = u2, u2;
  };
}
var Z = ((o2) => (o2[o2.Open = 0] = "Open", o2[o2.Closed = 1] = "Closed", o2))(Z || {}), ee = ((o2) => (o2[o2.Pointer = 0] = "Pointer", o2[o2.Other = 1] = "Other", o2))(ee || {});
function te(i2) {
  requestAnimationFrame(() => requestAnimationFrame(i2));
}
let A = Symbol("MenuContext");
function O(i2) {
  let b2 = inject(A, null);
  if (b2 === null) {
    let o2 = new Error(`<${i2} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o2, O), o2;
  }
  return b2;
}
let ge = defineComponent({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(i$12, { slots: b2, attrs: o2 }) {
  let I2 = ref(1), p2 = ref(null), e = ref(null), r2 = ref([]), f$1 = ref(""), d2 = ref(null), g2 = ref(1);
  function M(t2 = (a2) => a2) {
    let a2 = d2.value !== null ? r2.value[d2.value] : null, n2 = O$1(t2(r2.value.slice()), (v2) => o$2(v2.dataRef.domRef)), s3 = a2 ? n2.indexOf(a2) : null;
    return s3 === -1 && (s3 = null), { items: n2, activeItemIndex: s3 };
  }
  let l2 = { menuState: I2, buttonRef: p2, itemsRef: e, items: r2, searchQuery: f$1, activeItemIndex: d2, activationTrigger: g2, closeMenu: () => {
    I2.value = 1, d2.value = null;
  }, openMenu: () => I2.value = 0, goToItem(t2, a2, n2) {
    let s3 = M(), v2 = f(t2 === c.Specific ? { focus: c.Specific, id: a2 } : { focus: t2 }, { resolveItems: () => s3.items, resolveActiveIndex: () => s3.activeItemIndex, resolveId: (u2) => u2.id, resolveDisabled: (u2) => u2.dataRef.disabled });
    f$1.value = "", d2.value = v2, g2.value = n2 != null ? n2 : 1, r2.value = s3.items;
  }, search(t2) {
    let n2 = f$1.value !== "" ? 0 : 1;
    f$1.value += t2.toLowerCase();
    let v2 = (d2.value !== null ? r2.value.slice(d2.value + n2).concat(r2.value.slice(0, d2.value + n2)) : r2.value).find((h2) => h2.dataRef.textValue.startsWith(f$1.value) && !h2.dataRef.disabled), u2 = v2 ? r2.value.indexOf(v2) : -1;
    u2 === -1 || u2 === d2.value || (d2.value = u2, g2.value = 1);
  }, clearSearch() {
    f$1.value = "";
  }, registerItem(t2, a2) {
    let n2 = M((s3) => [...s3, { id: t2, dataRef: a2 }]);
    r2.value = n2.items, d2.value = n2.activeItemIndex, g2.value = 1;
  }, unregisterItem(t2) {
    let a2 = M((n2) => {
      let s3 = n2.findIndex((v2) => v2.id === t2);
      return s3 !== -1 && n2.splice(s3, 1), n2;
    });
    r2.value = a2.items, d2.value = a2.activeItemIndex, g2.value = 1;
  } };
  return w([p2, e], (t2, a2) => {
    var n2;
    l2.closeMenu(), w$2(a2, h.Loose) || (t2.preventDefault(), (n2 = o$2(p2)) == null || n2.focus());
  }, computed(() => I2.value === 0)), provide(A, l2), t(computed(() => u$3(I2.value, { [0]: i.Open, [1]: i.Closed }))), () => {
    let t2 = { open: I2.value === 0, close: l2.closeMenu };
    return A$1({ ourProps: {}, theirProps: i$12, slot: t2, slots: b2, attrs: o2, name: "Menu" });
  };
} }), Se = defineComponent({ name: "MenuButton", props: { disabled: { type: Boolean, default: false }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(i2, { attrs: b2, slots: o2, expose: I2 }) {
  var M;
  let p2 = (M = i2.id) != null ? M : `headlessui-menu-button-${I$1()}`, e = O("MenuButton");
  I2({ el: e.buttonRef, $el: e.buttonRef });
  function r2(l2) {
    switch (l2.key) {
      case o$1.Space:
      case o$1.Enter:
      case o$1.ArrowDown:
        l2.preventDefault(), l2.stopPropagation(), e.openMenu(), nextTick(() => {
          var t2;
          (t2 = o$2(e.itemsRef)) == null || t2.focus({ preventScroll: true }), e.goToItem(c.First);
        });
        break;
      case o$1.ArrowUp:
        l2.preventDefault(), l2.stopPropagation(), e.openMenu(), nextTick(() => {
          var t2;
          (t2 = o$2(e.itemsRef)) == null || t2.focus({ preventScroll: true }), e.goToItem(c.Last);
        });
        break;
    }
  }
  function f2(l2) {
    switch (l2.key) {
      case o$1.Space:
        l2.preventDefault();
        break;
    }
  }
  function d2(l2) {
    i2.disabled || (e.menuState.value === 0 ? (e.closeMenu(), nextTick(() => {
      var t2;
      return (t2 = o$2(e.buttonRef)) == null ? void 0 : t2.focus({ preventScroll: true });
    })) : (l2.preventDefault(), e.openMenu(), te(() => {
      var t2;
      return (t2 = o$2(e.itemsRef)) == null ? void 0 : t2.focus({ preventScroll: true });
    })));
  }
  let g2 = s$1(computed(() => ({ as: i2.as, type: b2.type })), e.buttonRef);
  return () => {
    var n2;
    let l2 = { open: e.menuState.value === 0 }, { ...t2 } = i2, a2 = { ref: e.buttonRef, id: p2, type: g2.value, "aria-haspopup": "menu", "aria-controls": (n2 = o$2(e.itemsRef)) == null ? void 0 : n2.id, "aria-expanded": e.menuState.value === 0, onKeydown: r2, onKeyup: f2, onClick: d2 };
    return A$1({ ourProps: a2, theirProps: t2, slot: l2, attrs: b2, slots: o2, name: "MenuButton" });
  };
} }), be = defineComponent({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(i$22, { attrs: b2, slots: o2, expose: I2 }) {
  var l$12;
  let p2 = (l$12 = i$22.id) != null ? l$12 : `headlessui-menu-items-${I$1()}`, e = O("MenuItems"), r2 = ref(null);
  I2({ el: e.itemsRef, $el: e.itemsRef }), i$1({ container: computed(() => o$2(e.itemsRef)), enabled: computed(() => e.menuState.value === 0), accept(t2) {
    return t2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(t2) {
    t2.setAttribute("role", "none");
  } });
  function f2(t2) {
    var a2;
    switch (r2.value && clearTimeout(r2.value), t2.key) {
      case o$1.Space:
        if (e.searchQuery.value !== "")
          return t2.preventDefault(), t2.stopPropagation(), e.search(t2.key);
      case o$1.Enter:
        if (t2.preventDefault(), t2.stopPropagation(), e.activeItemIndex.value !== null) {
          let s3 = e.items.value[e.activeItemIndex.value];
          (a2 = o$2(s3.dataRef.domRef)) == null || a2.click();
        }
        e.closeMenu(), _(o$2(e.buttonRef));
        break;
      case o$1.ArrowDown:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(c.Next);
      case o$1.ArrowUp:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(c.Previous);
      case o$1.Home:
      case o$1.PageUp:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(c.First);
      case o$1.End:
      case o$1.PageDown:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(c.Last);
      case o$1.Escape:
        t2.preventDefault(), t2.stopPropagation(), e.closeMenu(), nextTick(() => {
          var n2;
          return (n2 = o$2(e.buttonRef)) == null ? void 0 : n2.focus({ preventScroll: true });
        });
        break;
      case o$1.Tab:
        t2.preventDefault(), t2.stopPropagation(), e.closeMenu(), nextTick(() => v$1(o$2(e.buttonRef), t2.shiftKey ? N$1.Previous : N$1.Next));
        break;
      default:
        t2.key.length === 1 && (e.search(t2.key), r2.value = setTimeout(() => e.clearSearch(), 350));
        break;
    }
  }
  function d2(t2) {
    switch (t2.key) {
      case o$1.Space:
        t2.preventDefault();
        break;
    }
  }
  let g2 = l(), M = computed(() => g2 !== null ? (g2.value & i.Open) === i.Open : e.menuState.value === 0);
  return () => {
    var s3, v2;
    let t2 = { open: e.menuState.value === 0 }, { ...a2 } = i$22, n2 = { "aria-activedescendant": e.activeItemIndex.value === null || (s3 = e.items.value[e.activeItemIndex.value]) == null ? void 0 : s3.id, "aria-labelledby": (v2 = o$2(e.buttonRef)) == null ? void 0 : v2.id, id: p2, onKeydown: f2, onKeyup: d2, role: "menu", tabIndex: 0, ref: e.itemsRef };
    return A$1({ ourProps: n2, theirProps: a2, slot: t2, attrs: b2, slots: o2, features: N.RenderStrategy | N.Static, visible: M.value, name: "MenuItems" });
  };
} }), Me = defineComponent({ name: "MenuItem", inheritAttrs: false, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(i2, { slots: b2, attrs: o2, expose: I2 }) {
  var v2;
  let p$1 = (v2 = i2.id) != null ? v2 : `headlessui-menu-item-${I$1()}`, e = O("MenuItem"), r2 = ref(null);
  I2({ el: r2, $el: r2 });
  let f2 = computed(() => e.activeItemIndex.value !== null ? e.items.value[e.activeItemIndex.value].id === p$1 : false), d2 = p(r2), g2 = computed(() => ({ disabled: i2.disabled, get textValue() {
    return d2();
  }, domRef: r2 }));
  onMounted(() => e.registerItem(p$1, g2)), onUnmounted(() => e.unregisterItem(p$1)), watchEffect(() => {
    e.menuState.value === 0 && f2.value && e.activationTrigger.value !== 0 && nextTick(() => {
      var u2, h2;
      return (h2 = (u2 = o$2(r2)) == null ? void 0 : u2.scrollIntoView) == null ? void 0 : h2.call(u2, { block: "nearest" });
    });
  });
  function M(u2) {
    if (i2.disabled)
      return u2.preventDefault();
    e.closeMenu(), _(o$2(e.buttonRef));
  }
  function l2() {
    if (i2.disabled)
      return e.goToItem(c.Nothing);
    e.goToItem(c.Specific, p$1);
  }
  let t2 = u$1();
  function a2(u2) {
    t2.update(u2);
  }
  function n2(u2) {
    t2.wasMoved(u2) && (i2.disabled || f2.value || e.goToItem(c.Specific, p$1, 0));
  }
  function s3(u2) {
    t2.wasMoved(u2) && (i2.disabled || f2.value && e.goToItem(c.Nothing));
  }
  return () => {
    let { disabled: u2 } = i2, h2 = { active: f2.value, disabled: u2, close: e.closeMenu }, { ...C } = i2;
    return A$1({ ourProps: { id: p$1, ref: r2, role: "menuitem", tabIndex: u2 === true ? void 0 : -1, "aria-disabled": u2 === true ? true : void 0, disabled: void 0, onClick: M, onFocus: l2, onPointerenter: a2, onMouseenter: a2, onPointermove: n2, onMousemove: n2, onPointerleave: s3, onMouseleave: s3 }, theirProps: { ...o2, ...C }, slot: h2, attrs: o2, slots: b2, name: "MenuItem" });
  };
} });
function getWindow(node) {
  if (node == null) {
    return void 0;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || void 0 : void 0;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = (void 0).userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return (void 0).userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : void 0, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x + width,
    bottom: y2 + height,
    left: x,
    x,
    y: y2
  };
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || (void 0).document).documentElement;
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y: y2
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y: y2
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function getVariation(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var passive = {
  passive: true
};
function effect$2(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window.removeEventListener("resize", instance.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect$2,
  data: {}
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y2 = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y: y2
  }) : {
    x,
    y: y2
  };
  x = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = void 0;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y: y2
  }, getWindow(popper2)) : {
    x,
    y: y2
  };
  x = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y2 + "px)" : "translate3d(" + x + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$1,
  requires: ["computeStyles"]
};
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b2) {
    return overflows[a2] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrowModifier = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
popperGenerator({
  defaultModifiers: [...defaultModifiers, offset$1, flip$1, preventOverflow$1, computeStyles$1, eventListeners, arrowModifier]
});
function usePopper({
  locked = false,
  overflowPadding = 8,
  offsetDistance = 8,
  offsetSkid = 0,
  gpuAcceleration = true,
  adaptive = true,
  scroll = true,
  resize = true,
  arrow: arrow2 = false,
  placement,
  strategy
}, virtualReference) {
  const reference2 = ref(null);
  const popper2 = ref(null);
  const instance = ref(null);
  return [reference2, popper2, instance];
}
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.dropdown, dropdown);
const _sfc_main = defineComponent({
  components: {
    HMenu: ge,
    HMenuButton: Se,
    HMenuItems: be,
    HMenuItem: Me,
    UIcon: __nuxt_component_2$1,
    UAvatar: __nuxt_component_1$1,
    UKbd: __nuxt_component_3
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String,
      default: "click",
      validator: (value) => ["click", "hover"].includes(value)
    },
    open: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    openDelay: {
      type: Number,
      default: () => config.default.openDelay
    },
    closeDelay: {
      type: Number,
      default: () => config.default.closeDelay
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
  emits: ["update:open"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("dropdown", toRef(props, "ui"), config, toRef(props, "class"));
    const popper2 = computed(() => defu(props.mode === "hover" ? { offsetDistance: 0 } : {}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper2.value);
    const menuApi = ref(null);
    let openTimeout = null;
    let closeTimeout = null;
    const containerStyle = computed(() => {
      var _a, _b, _c;
      if (props.mode !== "hover") {
        return {};
      }
      const offsetDistance = ((_a = props.popper) == null ? void 0 : _a.offsetDistance) || ((_b = ui.value.popper) == null ? void 0 : _b.offsetDistance) || 8;
      const placement = (_c = popper2.value.placement) == null ? void 0 : _c.split("-")[0];
      const padding = `${offsetDistance}px`;
      if (placement === "top" || placement === "bottom") {
        return {
          paddingTop: padding,
          paddingBottom: padding
        };
      } else if (placement === "left" || placement === "right") {
        return {
          paddingLeft: padding,
          paddingRight: padding
        };
      } else {
        return {
          paddingTop: padding,
          paddingBottom: padding,
          paddingLeft: padding,
          paddingRight: padding
        };
      }
    });
    function onTouchStart() {
      if (!menuApi.value) {
        return;
      }
      if (menuApi.value.menuState === 0) {
        menuApi.value.closeMenu();
      } else {
        menuApi.value.openMenu();
      }
    }
    function onMouseEnter() {
      if (props.mode !== "hover" || !menuApi.value) {
        return;
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (menuApi.value.menuState === 0) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        menuApi.value.openMenu && menuApi.value.openMenu();
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (props.mode !== "hover" || !menuApi.value) {
        return;
      }
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (menuApi.value.menuState === 1) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        menuApi.value.closeMenu && menuApi.value.closeMenu();
        closeTimeout = null;
      }, props.closeDelay);
    }
    function onClick(e, item, { href, navigate, close, isExternal }) {
      if (item.click) {
        item.click(e);
      }
      if (href && !isExternal) {
        navigate(e);
        close();
      }
    }
    watch(() => props.open, (newValue, oldValue) => {
      if (!menuApi.value)
        return;
      if (oldValue === void 0 || newValue === oldValue)
        return;
      if (newValue) {
        menuApi.value.openMenu();
      } else {
        menuApi.value.closeMenu();
      }
    });
    watch(() => {
      var _a;
      return (_a = menuApi.value) == null ? void 0 : _a.menuState;
    }, (newValue, oldValue) => {
      if (oldValue === void 0 || newValue === oldValue)
        return;
      emit("update:open", newValue === 0);
    });
    const NuxtLink = __nuxt_component_0$2;
    l$1(() => useId("$ch3VzLVlsG"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      popper: popper2,
      trigger,
      container,
      containerStyle,
      onTouchStart,
      onMouseEnter,
      onMouseLeave,
      onClick,
      getNuxtLinkProps,
      twMerge,
      twJoin,
      NuxtLink
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HMenu = resolveComponent("HMenu");
  const _component_HMenuButton = resolveComponent("HMenuButton");
  const _component_HMenuItems = resolveComponent("HMenuItems");
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_HMenuItem = resolveComponent("HMenuItem");
  const _component_UIcon = __nuxt_component_2$1;
  const _component_UAvatar = __nuxt_component_1$1;
  const _component_UKbd = __nuxt_component_3;
  _push(ssrRenderComponent(_component_HMenu, mergeProps({
    as: "div",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { onMouseleave: _ctx.onMouseLeave }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HMenuButton, {
          ref: "trigger",
          as: "div",
          disabled: _ctx.disabled,
          class: _ctx.ui.trigger,
          role: "button",
          onMouseenter: _ctx.onMouseEnter,
          onTouchstart: _ctx.onTouchStart
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled
              }, () => {
                _push3(`<button${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${_scopeId2}> Open </button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled
                }, () => [
                  createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        if (open && _ctx.items.length) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}" style="${ssrRenderStyle(_ctx.containerStyle)}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_HMenuItems, {
            class: [_ctx.ui.base, _ctx.ui.divide, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.background, _ctx.ui.height],
            static: ""
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.items, (subItems, index) => {
                  _push3(`<div class="${ssrRenderClass(_ctx.ui.padding)}"${_scopeId2}><!--[-->`);
                  ssrRenderList(subItems, (item, subIndex) => {
                    _push3(ssrRenderComponent(_component_NuxtLink, mergeProps({ key: subIndex }, _ctx.getNuxtLinkProps(item), { custom: "" }), {
                      default: withCtx(({ href, target, rel, navigate, isExternal, isActive }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_HMenuItem, {
                            disabled: item.disabled
                          }, {
                            default: withCtx(({ active, disabled: itemDisabled, close }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(!!href ? "a" : "button"), {
                                  href: !itemDisabled ? href : void 0,
                                  rel,
                                  target,
                                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                  onClick: ($event) => _ctx.onClick($event, item, { href, navigate, close, isExternal })
                                }, {
                                  default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      ssrRenderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                        var _a;
                                        if (item.icon) {
                                          _push6(ssrRenderComponent(_component_UIcon, {
                                            name: item.icon,
                                            class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                          }, null, _parent6, _scopeId5));
                                        } else if (item.avatar) {
                                          _push6(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                            class: _ctx.ui.item.avatar.base
                                          }), null, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`<span class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.item.label, item.labelClass))}"${_scopeId5}>${ssrInterpolate(item.label)}</span>`);
                                        if ((_a = item.shortcuts) == null ? void 0 : _a.length) {
                                          _push6(`<span class="${ssrRenderClass(_ctx.ui.item.shortcuts)}"${_scopeId5}><!--[-->`);
                                          ssrRenderList(item.shortcuts, (shortcut) => {
                                            _push6(ssrRenderComponent(_component_UKbd, { key: shortcut }, {
                                              default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(`${ssrInterpolate(shortcut)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(shortcut), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          });
                                          _push6(`<!--]--></span>`);
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                      }, _push6, _parent6, _scopeId5);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                          var _a;
                                          return [
                                            item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                              key: 0,
                                              name: item.icon,
                                              class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                            }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                              class: _ctx.ui.item.avatar.base
                                            }), null, 16, ["class"])) : createCommentVNode("", true),
                                            createVNode("span", {
                                              class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                            }, toDisplayString(item.label), 3),
                                            ((_a = item.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                                              key: 2,
                                              class: _ctx.ui.item.shortcuts
                                            }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                                return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(shortcut), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ], 2)) : createCommentVNode("", true)
                                          ];
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }), _parent5, _scopeId4);
                              } else {
                                return [
                                  (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                    href: !itemDisabled ? href : void 0,
                                    rel,
                                    target,
                                    class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                    onClick: ($event) => _ctx.onClick($event, item, { href, navigate, close, isExternal })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                        var _a;
                                        return [
                                          item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                            key: 0,
                                            name: item.icon,
                                            class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                          }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                            class: _ctx.ui.item.avatar.base
                                          }), null, 16, ["class"])) : createCommentVNode("", true),
                                          createVNode("span", {
                                            class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                          }, toDisplayString(item.label), 3),
                                          ((_a = item.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                                            key: 2,
                                            class: _ctx.ui.item.shortcuts
                                          }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                              return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(shortcut), 1)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ], 2)) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["href", "rel", "target", "class", "onClick"]))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_HMenuItem, {
                              disabled: item.disabled
                            }, {
                              default: withCtx(({ active, disabled: itemDisabled, close }) => [
                                (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                  href: !itemDisabled ? href : void 0,
                                  rel,
                                  target,
                                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                  onClick: ($event) => _ctx.onClick($event, item, { href, navigate, close, isExternal })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                      var _a;
                                      return [
                                        item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                          key: 0,
                                          name: item.icon,
                                          class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                          class: _ctx.ui.item.avatar.base
                                        }), null, 16, ["class"])) : createCommentVNode("", true),
                                        createVNode("span", {
                                          class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                        }, toDisplayString(item.label), 3),
                                        ((_a = item.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: _ctx.ui.item.shortcuts
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                            return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(shortcut), 1)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ], 2)) : createCommentVNode("", true)
                                      ];
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["href", "rel", "target", "class", "onClick"]))
                              ]),
                              _: 2
                            }, 1032, ["disabled"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (subItems, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: _ctx.ui.padding
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(subItems, (item, subIndex) => {
                        return openBlock(), createBlock(_component_NuxtLink, mergeProps({ key: subIndex }, _ctx.getNuxtLinkProps(item), { custom: "" }), {
                          default: withCtx(({ href, target, rel, navigate, isExternal, isActive }) => [
                            createVNode(_component_HMenuItem, {
                              disabled: item.disabled
                            }, {
                              default: withCtx(({ active, disabled: itemDisabled, close }) => [
                                (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                  href: !itemDisabled ? href : void 0,
                                  rel,
                                  target,
                                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                  onClick: ($event) => _ctx.onClick($event, item, { href, navigate, close, isExternal })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                      var _a;
                                      return [
                                        item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                          key: 0,
                                          name: item.icon,
                                          class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                          class: _ctx.ui.item.avatar.base
                                        }), null, 16, ["class"])) : createCommentVNode("", true),
                                        createVNode("span", {
                                          class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                        }, toDisplayString(item.label), 3),
                                        ((_a = item.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: _ctx.ui.item.shortcuts
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                            return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(shortcut), 1)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ], 2)) : createCommentVNode("", true)
                                      ];
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["href", "rel", "target", "class", "onClick"]))
                              ]),
                              _: 2
                            }, 1032, ["disabled"])
                          ]),
                          _: 2
                        }, 1040);
                      }), 128))
                    ], 2);
                  }), 128))
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_HMenuButton, {
            ref: "trigger",
            as: "div",
            disabled: _ctx.disabled,
            class: _ctx.ui.trigger,
            role: "button",
            onMouseenter: _ctx.onMouseEnter,
            onTouchstart: withModifiers(_ctx.onTouchStart, ["prevent"])
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled
              }, () => [
                createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["disabled", "class", "onMouseenter", "onTouchstart"]),
          open && _ctx.items.length ? (openBlock(), createBlock("div", {
            key: 0,
            ref: "container",
            class: [_ctx.ui.container, _ctx.ui.width],
            style: _ctx.containerStyle
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.ui.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.ui.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  createVNode(_component_HMenuItems, {
                    class: [_ctx.ui.base, _ctx.ui.divide, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.background, _ctx.ui.height],
                    static: ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (subItems, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: _ctx.ui.padding
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(subItems, (item, subIndex) => {
                            return openBlock(), createBlock(_component_NuxtLink, mergeProps({ key: subIndex }, _ctx.getNuxtLinkProps(item), { custom: "" }), {
                              default: withCtx(({ href, target, rel, navigate, isExternal, isActive }) => [
                                createVNode(_component_HMenuItem, {
                                  disabled: item.disabled
                                }, {
                                  default: withCtx(({ active, disabled: itemDisabled, close }) => [
                                    (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                      href: !itemDisabled ? href : void 0,
                                      rel,
                                      target,
                                      class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                      onClick: ($event) => _ctx.onClick($event, item, { href, navigate, close, isExternal })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                          var _a;
                                          return [
                                            item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                              key: 0,
                                              name: item.icon,
                                              class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                            }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                              class: _ctx.ui.item.avatar.base
                                            }), null, 16, ["class"])) : createCommentVNode("", true),
                                            createVNode("span", {
                                              class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                            }, toDisplayString(item.label), 3),
                                            ((_a = item.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                                              key: 2,
                                              class: _ctx.ui.item.shortcuts
                                            }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                                return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(shortcut), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ], 2)) : createCommentVNode("", true)
                                          ];
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["href", "rel", "target", "class", "onClick"]))
                                  ]),
                                  _: 2
                                }, 1032, ["disabled"])
                              ]),
                              _: 2
                            }, 1040);
                          }), 128))
                        ], 2);
                      }), 128))
                    ]),
                    _: 3
                  }, 8, ["class"])
                ])
              ]),
              _: 3
            }, 16)
          ], 6)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.14.2_nuxt@3.11.0_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui/dist/runtime/components/elements/Dropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const dateFormat = (timestampStr) => {
  const dateObj = new Date(timestampStr);
  const day = dateObj.getDate().toString().padStart(2, "0");
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours().toString().padStart(2, "0");
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  const seconds = dateObj.getSeconds().toString().padStart(2, "0");
  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};
const numberFormat = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export { A$1 as A, I$1 as I, N, P, S$1 as S, T, __nuxt_component_0 as _, __nuxt_component_1 as a, i as b, S as c, dateFormat as d, c$2 as e, l$1 as f, w$1 as g, N$1 as h, i$3 as i, T$1 as j, o$1 as k, l, t$1 as m, numberFormat as n, o$2 as o, s2 as s, t, u$3 as u, w };
//# sourceMappingURL=formatters--gMSpixf.mjs.map
