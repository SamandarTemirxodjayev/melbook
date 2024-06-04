import { m as mergeConfig, j as input, b as appConfig, k as inputMenu, d as __nuxt_component_2, e as __nuxt_component_1, f as useUI, g as defu, h as useInjectButtonGroup, t as twMerge, i as twJoin, n as useToast, l as get, o as navigateTo, p as __nuxt_component_0$1, _ as _export_sfc } from './server.mjs';
import { o as o$3, u as u$6, c as c$1, f as f$1, w as w$2, t as t$3, i as i$1, a as f$1$1, E as E$2, s as s$3, A as A$4, T as T$1, I as I$1, b as s$4, d as i$4, N as N$4, l as l$2, e as i$2, g as u$4, h as usePopper, j as l$3, k as defineShortcuts, O as O$1, m as o$2, n as o$1, p as t$2, q as n$2, _ as __nuxt_component_1$1, r as __nuxt_component_2$1, v as __nuxt_component_4, x as __nuxt_component_5 } from './defineShortcuts-BGvCFfbh.mjs';
import { u as useFormGroup, a as useDebounceFn, c as computedAsync, b as useId, B as BASE_URL, C as CDN_URL, _ as __nuxt_component_6, d as __nuxt_component_7$1, e as __nuxt_component_8 } from './baseUrl-7YenCTPY.mjs';
import { defineComponent, computed, ref, watch, provide, h, cloneVNode, reactive, onMounted, Fragment, watchEffect, inject, onUnmounted, nextTick, toRef, useSSRContext, isRef, withCtx, createTextVNode, unref, createVNode, toDisplayString, toRaw, shallowRef, triggerRef, onScopeDispose, resolveComponent, mergeProps, renderSlot, openBlock, createBlock, createCommentVNode, renderList, Transition } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_8$1 } from './Textarea-Duli6Hgu.mjs';
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

function memo(getDeps, fn, opts) {
  var _a;
  let deps = (_a = opts.initialDeps) != null ? _a : [];
  let result;
  return () => {
    var _a2, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a2 = opts.debug) == null ? void 0 : _a2.call(opts)))
      depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts)))
      resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c\u23F1 ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  } else {
    return value;
  }
}
const approxEqual = (a, b) => Math.abs(a - b) < 1;
const defaultKeyExtractor = (index) => index;
const defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i2 = start; i2 <= end; i2++) {
    arr.push(i2);
  }
  return arr;
};
const observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(element.getBoundingClientRect());
  if (typeof ResizeObserver === "undefined") {
    return () => {
    };
  }
  const observer = new ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry == null ? void 0 : entry.borderBoxSize) {
      const box = entry.borderBoxSize[0];
      if (box) {
        handler({ width: box.inlineSize, height: box.blockSize });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
const observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const handler = () => {
    cb(element[instance.options.horizontal ? "scrollLeft" : "scrollTop"]);
  };
  handler();
  element.addEventListener("scroll", handler, {
    passive: true
  });
  return () => {
    element.removeEventListener("scroll", handler);
  };
};
const measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size;
    }
  }
  return Math.round(
    element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]
  );
};
const elementScroll = (offset, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
class Virtualizer {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.isScrolling = false;
    this.isScrollingTimeoutId = null;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.measureElementCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get2 = () => {
        if (_ro) {
          return _ro;
        } else if (typeof ResizeObserver !== "undefined") {
          return _ro = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
              this._measureElement(entry.target, entry);
            });
          });
        } else {
          return null;
        }
      };
      return {
        disconnect: () => {
          var _a;
          return (_a = get2()) == null ? void 0 : _a.disconnect();
        },
        observe: (target) => {
          var _a;
          return (_a = get2()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get2()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined")
          delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        scrollingDelay: 150,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        ...opts2
      };
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
    };
    this.maybeNotify = memo(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: false,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d2) => d2());
      this.unsubs = [];
      this.scrollElement = null;
    };
    this._didMount = () => {
      this.measureElementCache.forEach(this.observer.observe);
      return () => {
        this.observer.disconnect();
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      const scrollElement = this.options.getScrollElement();
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        this.scrollElement = scrollElement;
        this._scrollToOffset(this.scrollOffset, {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset) => {
            this.scrollAdjustments = 0;
            if (this.scrollOffset === offset) {
              return;
            }
            if (this.isScrollingTimeoutId !== null) {
              clearTimeout(this.isScrollingTimeoutId);
              this.isScrollingTimeoutId = null;
            }
            this.isScrolling = true;
            this.scrollDirection = this.scrollOffset < offset ? "forward" : "backward";
            this.scrollOffset = offset;
            this.maybeNotify();
            this.isScrollingTimeoutId = setTimeout(() => {
              this.isScrollingTimeoutId = null;
              this.isScrolling = false;
              this.scrollDirection = null;
              this.maybeNotify();
            }, this.options.scrollingDelay);
          })
        );
      }
    };
    this.getSize = () => {
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.memoOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey
      ],
      (count, paddingStart, scrollMargin, getItemKey) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count,
          paddingStart,
          scrollMargin,
          getItemKey
        };
      },
      {
        key: false
      }
    );
    this.getFurthestMeasurement = (measurements, index) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m = index - 1; m >= 0; m--) {
        const measurement = measurements[m];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a, b) => {
        if (a.end === b.end) {
          return a.index - b.index;
        }
        return a.end - b.end;
      })[0] : void 0;
    };
    this.getMeasurements = memo(
      () => [this.memoOptions(), this.itemSizeCache],
      ({ count, paddingStart, scrollMargin, getItemKey }, itemSizeCache) => {
        const min = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min);
        for (let i2 = min; i2 < count; i2++) {
          const key = getItemKey(i2);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i2 - 1] : this.getFurthestMeasurement(measurements, i2);
          const start = furthestMeasurement ? furthestMeasurement.end : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i2);
          const end = start + size;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i2 % this.options.lanes;
          measurements[i2] = {
            index: i2,
            start,
            size,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [this.getMeasurements(), this.getSize(), this.scrollOffset],
      (measurements, outerSize, scrollOffset) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset
        }) : null;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getIndexes = memo(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (rangeExtractor, range, overscan, count) => {
        return range === null ? [] : rangeExtractor({
          ...range,
          overscan,
          count
        });
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const item = this.measurementsCache[this.indexFromElement(node)];
      if (!item || !node.isConnected) {
        this.measureElementCache.forEach((cached, key) => {
          if (cached === node) {
            this.observer.unobserve(node);
            this.measureElementCache.delete(key);
          }
        });
        return;
      }
      const prevNode = this.measureElementCache.get(item.key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.measureElementCache.set(item.key, node);
      }
      const measuredItemSize = this.options.measureElement(node, entry, this);
      this.resizeItem(item, measuredItemSize);
    };
    this.resizeItem = (item, size) => {
      var _a;
      const itemSize = (_a = this.itemSizeCache.get(item.key)) != null ? _a : item.size;
      const delta = size - itemSize;
      if (delta !== 0) {
        if (item.start < this.scrollOffset + this.scrollAdjustments) {
          this._scrollToOffset(this.scrollOffset, {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size));
        this.notify(false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo(
      () => [this.getIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k = 0, len = indexes.length; k < len; k++) {
          const i2 = indexes[k];
          const measurement = measurements[i2];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset) => {
      const measurements = this.getMeasurements();
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index) => notUndefined(measurements[index]).start,
          offset
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align) => {
      const size = this.getSize();
      if (align === "auto") {
        if (toOffset <= this.scrollOffset) {
          align = "start";
        } else if (toOffset >= this.scrollOffset + size) {
          align = "end";
        } else {
          align = "start";
        }
      }
      if (align === "start") {
        toOffset = toOffset;
      } else if (align === "end") {
        toOffset = toOffset - size;
      } else if (align === "center") {
        toOffset = toOffset - size / 2;
      }
      const scrollSizeProp = this.options.horizontal ? "scrollWidth" : "scrollHeight";
      const scrollSize = this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[scrollSizeProp] : this.scrollElement[scrollSizeProp] : 0;
      const maxOffset = scrollSize - this.getSize();
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index, align = "auto") => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const measurement = notUndefined(this.getMeasurements()[index]);
      if (align === "auto") {
        if (measurement.end >= this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (measurement.start <= this.scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [this.scrollOffset, align];
        }
      }
      const toOffset = align === "end" ? measurement.end + this.options.scrollPaddingEnd : measurement.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(toOffset, align), align];
    };
    this.isDynamicMode = () => this.measureElementCache.size > 0;
    this.cancelScrollToIndex = () => {
      if (this.scrollToIndexTimeoutId !== null) {
        clearTimeout(this.scrollToIndexTimeoutId);
        this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index, { align: initialAlign = "auto", behavior } = {}) => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      const [toOffset, align] = this.getOffsetForIndex(index, initialAlign);
      this._scrollToOffset(toOffset, { adjustments: void 0, behavior });
      if (behavior !== "smooth" && this.isDynamicMode()) {
        this.scrollToIndexTimeoutId = setTimeout(() => {
          this.scrollToIndexTimeoutId = null;
          const elementInDOM = this.measureElementCache.has(
            this.options.getItemKey(index)
          );
          if (elementInDOM) {
            const [toOffset2] = this.getOffsetForIndex(index, align);
            if (!approxEqual(toOffset2, this.scrollOffset)) {
              this.scrollToIndex(index, { align, behavior });
            }
          } else {
            this.scrollToIndex(index, { align, behavior });
          }
        });
      }
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.scrollOffset + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a2;
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else {
        end = this.options.lanes === 1 ? (_a2 = (_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) != null ? _a2 : 0 : Math.max(
          ...measurements.slice(-this.options.lanes).map((m) => m.end)
        );
      }
      return end - this.options.scrollMargin + this.options.paddingEnd;
    };
    this._scrollToOffset = (offset, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map();
      this.notify(false);
    };
    this.setOptions(opts);
    this.scrollRect = this.options.initialRect;
    this.scrollOffset = this.options.initialOffset;
    this.measurementsCache = this.options.initialMeasurementsCache;
    this.measurementsCache.forEach((item) => {
      this.itemSizeCache.set(item.key, item.size);
    });
    this.maybeNotify();
  }
}
const findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset
}) {
  const count = measurements.length - 1;
  const getOffset = (index) => measurements[index].start;
  const startIndex = findNearestBinarySearch(0, count, getOffset, scrollOffset);
  let endIndex = startIndex;
  while (endIndex < count && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return { startIndex, endIndex };
}
function useVirtualizerBase(options) {
  const virtualizer = new Virtualizer(unref(options));
  const state = shallowRef(virtualizer);
  const cleanup = virtualizer._didMount();
  watch(
    () => unref(options).getScrollElement(),
    (el) => {
      if (el) {
        virtualizer._willUpdate();
      }
    },
    {
      immediate: true
    }
  );
  watch(
    () => unref(options),
    (options2) => {
      virtualizer.setOptions({
        ...options2,
        onChange: (instance, sync) => {
          var _a;
          triggerRef(state);
          (_a = options2.onChange) == null ? void 0 : _a.call(options2, instance, sync);
        }
      });
      virtualizer._willUpdate();
      triggerRef(state);
    },
    {
      immediate: true
    }
  );
  onScopeDispose(cleanup);
  return state;
}
function useVirtualizer(options) {
  return useVirtualizerBase(
    computed(() => ({
      observeElementRect,
      observeElementOffset,
      scrollToFn: elementScroll,
      ...unref(options)
    }))
  );
}
function d(u2, e2, r) {
  let i2 = ref(r == null ? void 0 : r.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i2.value), function(t2) {
    return f2.value || (i2.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
function e(i2 = {}, s2 = null, t2 = []) {
  for (let [r, n2] of Object.entries(i2))
    o(t2, f(s2, r), n2);
  return t2;
}
function f(i2, s2) {
  return i2 ? i2 + "[" + s2 + "]" : s2;
}
function o(i2, s2, t2) {
  if (Array.isArray(t2))
    for (let [r, n2] of t2.entries())
      o(i2, f(s2, r.toString()), n2);
  else
    t2 instanceof Date ? i2.push([s2, t2.toISOString()]) : typeof t2 == "boolean" ? i2.push([s2, t2 ? "1" : "0"]) : typeof t2 == "string" ? i2.push([s2, t2]) : typeof t2 == "number" ? i2.push([s2, `${t2}`]) : t2 == null ? i2.push([s2, ""]) : e(t2, s2, i2);
}
function Pe(a, T2) {
  return a === T2;
}
var we = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(we || {}), Ee = ((r) => (r[r.Single = 0] = "Single", r[r.Multi = 1] = "Multi", r))(Ee || {}), Ve = ((R) => (R[R.Pointer = 0] = "Pointer", R[R.Focus = 1] = "Focus", R[R.Other = 2] = "Other", R))(Ve || {});
let ne = Symbol("ComboboxContext");
function N(a) {
  let T2 = inject(ne, null);
  if (T2 === null) {
    let r = new Error(`<${a} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, N), r;
  }
  return T2;
}
let ie = Symbol("VirtualContext"), ke = defineComponent({ name: "VirtualProvider", setup(a, { slots: T2 }) {
  let r = N("VirtualProvider"), R = computed(() => {
    let v = o$3(r.optionsRef);
    if (!v)
      return { start: 0, end: 0 };
    let s2 = (void 0).getComputedStyle(v);
    return { start: parseFloat(s2.paddingBlockStart || s2.paddingTop), end: parseFloat(s2.paddingBlockEnd || s2.paddingBottom) };
  }), o2 = useVirtualizer(computed(() => ({ scrollPaddingStart: R.value.start, scrollPaddingEnd: R.value.end, count: r.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return o$3(r.optionsRef);
  }, overscan: 12 }))), u2 = computed(() => {
    var v;
    return (v = r.virtual.value) == null ? void 0 : v.options;
  }), e2 = ref(0);
  return watch([u2], () => {
    e2.value += 1;
  }), provide(ie, r.virtual.value ? o2 : null), () => [h("div", { style: { position: "relative", width: "100%", height: `${o2.value.getTotalSize()}px` }, ref: (v) => {
    if (v) {
      if (typeof process != "undefined" && process.env.JEST_WORKER_ID !== void 0 || r.activationTrigger.value === 0)
        return;
      r.activeOptionIndex.value !== null && r.virtual.value.options.length > r.activeOptionIndex.value && o2.value.scrollToIndex(r.activeOptionIndex.value);
    }
  } }, o2.value.getVirtualItems().map((v) => cloneVNode(T2.default({ option: r.virtual.value.options[v.index], open: r.comboboxState.value === 0 })[0], { key: `${e2.value}-${v.index}`, "data-index": v.index, "aria-setsize": r.virtual.value.options.length, "aria-posinset": v.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${v.start}px)`, overflowAnchor: "none" } })))];
} }), Ze = defineComponent({ name: "Combobox", emits: { "update:modelValue": (a) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], nullable: true, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false }, immediate: { type: [Boolean], default: false }, virtual: { type: Object, default: null } }, inheritAttrs: false, setup(a, { slots: T$1$1, attrs: r, emit: R }) {
  let o2 = ref(1), u$12 = ref(null), e$1 = ref(null), v = ref(null), s$12 = ref(null), h$1 = ref({ static: false, hold: false }), b = ref([]), d$1 = ref(null), V = ref(2), P = ref(false);
  function D(l2 = (i2) => i2) {
    let i2 = d$1.value !== null ? b.value[d$1.value] : null, f2 = l2(b.value.slice()), p = f2.length > 0 && f2[0].dataRef.order.value !== null ? f2.sort((C, F) => C.dataRef.order.value - F.dataRef.order.value) : O$1(f2, (C) => o$3(C.dataRef.domRef)), O$1$1 = i2 ? p.indexOf(i2) : null;
    return O$1$1 === -1 && (O$1$1 = null), { options: p, activeOptionIndex: O$1$1 };
  }
  let L = computed(() => a.multiple ? 1 : 0), K = computed(() => a.nullable), [c$1$1, g] = d(computed(() => a.modelValue), (l2) => R("update:modelValue", l2), computed(() => a.defaultValue)), k = computed(() => c$1$1.value === void 0 ? u$6(L.value, { [1]: [], [0]: void 0 }) : c$1$1.value), n2 = null, y = null;
  function S(l2) {
    return u$6(L.value, { [0]() {
      return g == null ? void 0 : g(l2);
    }, [1]: () => {
      let i2 = toRaw(t$12.value.value).slice(), f2 = toRaw(l2), p = i2.findIndex((O2) => t$12.compare(f2, toRaw(O2)));
      return p === -1 ? i2.push(f2) : i2.splice(p, 1), g == null ? void 0 : g(i2);
    } });
  }
  let w$1 = computed(() => {
  });
  watch([w$1], ([l2], [i2]) => {
    if (t$12.virtual.value && l2 && i2 && d$1.value !== null) {
      let f2 = l2.indexOf(i2[d$1.value]);
      f2 !== -1 ? d$1.value = f2 : d$1.value = null;
    }
  });
  let t$12 = { comboboxState: o2, value: k, mode: L, compare(l2, i2) {
    if (typeof a.by == "string") {
      let f2 = a.by;
      return (l2 == null ? void 0 : l2[f2]) === (i2 == null ? void 0 : i2[f2]);
    }
    return a.by === null ? Pe(l2, i2) : a.by(l2, i2);
  }, calculateIndex(l2) {
    return t$12.virtual.value ? a.by === null ? t$12.virtual.value.options.indexOf(l2) : t$12.virtual.value.options.findIndex((i2) => t$12.compare(i2, l2)) : b.value.findIndex((i2) => t$12.compare(i2.dataRef.value, l2));
  }, defaultValue: computed(() => a.defaultValue), nullable: K, immediate: computed(() => false), virtual: computed(() => null), inputRef: e$1, labelRef: u$12, buttonRef: v, optionsRef: s$12, disabled: computed(() => a.disabled), options: b, change(l2) {
    g(l2);
  }, activeOptionIndex: computed(() => {
    if (P.value && d$1.value === null && (t$12.virtual.value ? t$12.virtual.value.options.length > 0 : b.value.length > 0)) {
      if (t$12.virtual.value) {
        let i2 = t$12.virtual.value.options.findIndex((f2) => {
          var p;
          return !((p = t$12.virtual.value) != null && p.disabled(f2));
        });
        if (i2 !== -1)
          return i2;
      }
      let l2 = b.value.findIndex((i2) => !i2.dataRef.disabled);
      if (l2 !== -1)
        return l2;
    }
    return d$1.value;
  }), activationTrigger: V, optionsPropsRef: h$1, closeCombobox() {
    P.value = false, !a.disabled && o2.value !== 1 && (o2.value = 1, d$1.value = null);
  }, openCombobox() {
    if (P.value = true, !a.disabled && o2.value !== 0) {
      if (t$12.value.value) {
        let l2 = t$12.calculateIndex(t$12.value.value);
        l2 !== -1 && (d$1.value = l2);
      }
      o2.value = 0;
    }
  }, setActivationTrigger(l2) {
    V.value = l2;
  }, goToOption(l2, i2, f2) {
    P.value = false, n2 !== null && cancelAnimationFrame(n2), n2 = requestAnimationFrame(() => {
      if (a.disabled || s$12.value && !h$1.value.static && o2.value === 1)
        return;
      if (t$12.virtual.value) {
        d$1.value = l2 === c$1.Specific ? i2 : f$1({ focus: l2 }, { resolveItems: () => t$12.virtual.value.options, resolveActiveIndex: () => {
          var C, F;
          return (F = (C = t$12.activeOptionIndex.value) != null ? C : t$12.virtual.value.options.findIndex((W) => {
            var U;
            return !((U = t$12.virtual.value) != null && U.disabled(W));
          })) != null ? F : null;
        }, resolveDisabled: (C) => t$12.virtual.value.disabled(C), resolveId() {
          throw new Error("Function not implemented.");
        } }), V.value = f2 != null ? f2 : 2;
        return;
      }
      let p = D();
      if (p.activeOptionIndex === null) {
        let C = p.options.findIndex((F) => !F.dataRef.disabled);
        C !== -1 && (p.activeOptionIndex = C);
      }
      let O2 = l2 === c$1.Specific ? i2 : f$1({ focus: l2 }, { resolveItems: () => p.options, resolveActiveIndex: () => p.activeOptionIndex, resolveId: (C) => C.id, resolveDisabled: (C) => C.dataRef.disabled });
      d$1.value = O2, V.value = f2 != null ? f2 : 2, b.value = p.options;
    });
  }, selectOption(l2) {
    let i2 = b.value.find((p) => p.id === l2);
    if (!i2)
      return;
    let { dataRef: f2 } = i2;
    S(f2.value);
  }, selectActiveOption() {
    if (t$12.activeOptionIndex.value !== null) {
      if (t$12.virtual.value)
        S(t$12.virtual.value.options[t$12.activeOptionIndex.value]);
      else {
        let { dataRef: l2 } = b.value[t$12.activeOptionIndex.value];
        S(l2.value);
      }
      t$12.goToOption(c$1.Specific, t$12.activeOptionIndex.value);
    }
  }, registerOption(l2, i2) {
    let f2 = reactive({ id: l2, dataRef: i2 });
    if (t$12.virtual.value) {
      b.value.push(f2);
      return;
    }
    y && cancelAnimationFrame(y);
    let p = D((O2) => (O2.push(f2), O2));
    d$1.value === null && t$12.isSelected(i2.value.value) && (p.activeOptionIndex = p.options.indexOf(f2)), b.value = p.options, d$1.value = p.activeOptionIndex, V.value = 2, p.options.some((O2) => !o$3(O2.dataRef.domRef)) && (y = requestAnimationFrame(() => {
      let O2 = D();
      b.value = O2.options, d$1.value = O2.activeOptionIndex;
    }));
  }, unregisterOption(l2, i2) {
    if (n2 !== null && cancelAnimationFrame(n2), i2 && (P.value = true), t$12.virtual.value) {
      b.value = b.value.filter((p) => p.id !== l2);
      return;
    }
    let f2 = D((p) => {
      let O2 = p.findIndex((C) => C.id === l2);
      return O2 !== -1 && p.splice(O2, 1), p;
    });
    b.value = f2.options, d$1.value = f2.activeOptionIndex, V.value = 2;
  }, isSelected(l2) {
    return u$6(L.value, { [0]: () => t$12.compare(toRaw(t$12.value.value), toRaw(l2)), [1]: () => toRaw(t$12.value.value).some((i2) => t$12.compare(toRaw(i2), toRaw(l2))) });
  }, isActive(l2) {
    return d$1.value === t$12.calculateIndex(l2);
  } };
  w$2([e$1, v, s$12], () => t$12.closeCombobox(), computed(() => o2.value === 0)), provide(ne, t$12), t$3(computed(() => u$6(o2.value, { [0]: i$1.Open, [1]: i$1.Closed })));
  let I2 = computed(() => {
    var l2;
    return (l2 = o$3(e$1)) == null ? void 0 : l2.closest("form");
  });
  return onMounted(() => {
    watch([I2], () => {
      if (!I2.value || a.defaultValue === void 0)
        return;
      function l2() {
        t$12.change(a.defaultValue);
      }
      return I2.value.addEventListener("reset", l2), () => {
        var i2;
        (i2 = I2.value) == null || i2.removeEventListener("reset", l2);
      };
    }, { immediate: true });
  }), () => {
    var C, F, W;
    let { name: l2, disabled: i2, form: f2, ...p } = a, O2 = { open: o2.value === 0, disabled: i2, activeIndex: t$12.activeOptionIndex.value, activeOption: t$12.activeOptionIndex.value === null ? null : t$12.virtual.value ? t$12.virtual.value.options[(C = t$12.activeOptionIndex.value) != null ? C : 0] : (W = (F = t$12.options.value[t$12.activeOptionIndex.value]) == null ? void 0 : F.dataRef.value) != null ? W : null, value: k.value };
    return h(Fragment, [...l2 != null && k.value != null ? e({ [l2]: k.value }).map(([U, ue]) => h(f$1$1, E$2({ features: s$3.Hidden, key: U, as: "input", type: "hidden", hidden: true, readOnly: true, form: f2, name: U, value: ue }))) : [], A$4({ theirProps: { ...r, ...T$1(p, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: O2, slots: T$1$1, attrs: r, name: "Combobox" })]);
  };
} });
defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(a, { attrs: T2, slots: r }) {
  var e2;
  let R = (e2 = a.id) != null ? e2 : `headlessui-combobox-label-${I$1()}`, o2 = N("ComboboxLabel");
  function u2() {
    var v;
    (v = o$3(o2.inputRef)) == null || v.focus({ preventScroll: true });
  }
  return () => {
    let v = { open: o2.comboboxState.value === 0, disabled: o2.disabled.value }, { ...s2 } = a, h2 = { id: R, ref: o2.labelRef, onClick: u2 };
    return A$4({ ourProps: h2, theirProps: s2, slot: v, attrs: T2, slots: r, name: "ComboboxLabel" });
  };
} });
let tt = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(a, { attrs: T2, slots: r, expose: R }) {
  var h2;
  let o2 = (h2 = a.id) != null ? h2 : `headlessui-combobox-button-${I$1()}`, u2 = N("ComboboxButton");
  R({ el: u2.buttonRef, $el: u2.buttonRef });
  function e2(b) {
    u2.disabled.value || (u2.comboboxState.value === 0 ? u2.closeCombobox() : (b.preventDefault(), u2.openCombobox()), nextTick(() => {
      var d2;
      return (d2 = o$3(u2.inputRef)) == null ? void 0 : d2.focus({ preventScroll: true });
    }));
  }
  function v(b) {
    switch (b.key) {
      case o$2.ArrowDown:
        b.preventDefault(), b.stopPropagation(), u2.comboboxState.value === 1 && u2.openCombobox(), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
      case o$2.ArrowUp:
        b.preventDefault(), b.stopPropagation(), u2.comboboxState.value === 1 && (u2.openCombobox(), nextTick(() => {
          u2.value.value || u2.goToOption(c$1.Last);
        })), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
      case o$2.Escape:
        if (u2.comboboxState.value !== 0)
          return;
        b.preventDefault(), u2.optionsRef.value && !u2.optionsPropsRef.value.static && b.stopPropagation(), u2.closeCombobox(), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
    }
  }
  let s2 = s$4(computed(() => ({ as: a.as, type: T2.type })), u2.buttonRef);
  return () => {
    var P, D;
    let b = { open: u2.comboboxState.value === 0, disabled: u2.disabled.value, value: u2.value.value }, { ...d2 } = a, V = { ref: u2.buttonRef, id: o2, type: s2.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (P = o$3(u2.optionsRef)) == null ? void 0 : P.id, "aria-expanded": u2.comboboxState.value === 0, "aria-labelledby": u2.labelRef.value ? [(D = o$3(u2.labelRef)) == null ? void 0 : D.id, o2].join(" ") : void 0, disabled: u2.disabled.value === true ? true : void 0, onKeydown: v, onClick: e2 };
    return A$4({ ourProps: V, theirProps: d2, slot: b, attrs: T2, slots: r, name: "ComboboxButton" });
  };
} }), ot = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: null } }, emits: { change: (a) => true }, setup(a, { emit: T2, attrs: r, slots: R, expose: o2 }) {
  var k;
  let u$12 = (k = a.id) != null ? k : `headlessui-combobox-input-${I$1()}`, e2 = N("ComboboxInput"), v = computed(() => i$4(o$3(e2.inputRef))), s2 = { value: false };
  o2({ el: e2.inputRef, $el: e2.inputRef });
  function h2() {
    e2.change(null);
    let n2 = o$3(e2.optionsRef);
    n2 && (n2.scrollTop = 0), e2.goToOption(c$1.Nothing);
  }
  let b = computed(() => {
    var y;
    let n2 = e2.value.value;
    return o$3(e2.inputRef) ? typeof a.displayValue != "undefined" && n2 !== void 0 ? (y = a.displayValue(n2)) != null ? y : "" : typeof n2 == "string" ? n2 : "" : "";
  });
  onMounted(() => {
    watch([b, e2.comboboxState, v], ([n2, y], [S, w2]) => {
      if (s2.value)
        return;
      let t2 = o$3(e2.inputRef);
      t2 && ((w2 === 0 && y === 1 || n2 !== S) && (t2.value = n2), requestAnimationFrame(() => {
        var i2;
        if (s2.value || !t2 || ((i2 = v.value) == null ? void 0 : i2.activeElement) !== t2)
          return;
        let { selectionStart: I2, selectionEnd: l2 } = t2;
        Math.abs((l2 != null ? l2 : 0) - (I2 != null ? I2 : 0)) === 0 && I2 === 0 && t2.setSelectionRange(t2.value.length, t2.value.length);
      }));
    }, { immediate: true }), watch([e2.comboboxState], ([n2], [y]) => {
      if (n2 === 0 && y === 1) {
        if (s2.value)
          return;
        let S = o$3(e2.inputRef);
        if (!S)
          return;
        let w2 = S.value, { selectionStart: t2, selectionEnd: I2, selectionDirection: l2 } = S;
        S.value = "", S.value = w2, l2 !== null ? S.setSelectionRange(t2, I2, l2) : S.setSelectionRange(t2, I2);
      }
    });
  });
  let d2 = ref(false);
  function V() {
    d2.value = true;
  }
  function P() {
    o$1().nextFrame(() => {
      d2.value = false;
    });
  }
  function D(n2) {
    switch (s2.value = true, n2.key) {
      case o$2.Enter:
        if (s2.value = false, e2.comboboxState.value !== 0 || d2.value)
          return;
        if (n2.preventDefault(), n2.stopPropagation(), e2.activeOptionIndex.value === null) {
          e2.closeCombobox();
          return;
        }
        e2.selectActiveOption(), e2.mode.value === 0 && e2.closeCombobox();
        break;
      case o$2.ArrowDown:
        return s2.value = false, n2.preventDefault(), n2.stopPropagation(), u$6(e2.comboboxState.value, { [0]: () => e2.goToOption(c$1.Next), [1]: () => e2.openCombobox() });
      case o$2.ArrowUp:
        return s2.value = false, n2.preventDefault(), n2.stopPropagation(), u$6(e2.comboboxState.value, { [0]: () => e2.goToOption(c$1.Previous), [1]: () => {
          e2.openCombobox(), nextTick(() => {
            e2.value.value || e2.goToOption(c$1.Last);
          });
        } });
      case o$2.Home:
        if (n2.shiftKey)
          break;
        return s2.value = false, n2.preventDefault(), n2.stopPropagation(), e2.goToOption(c$1.First);
      case o$2.PageUp:
        return s2.value = false, n2.preventDefault(), n2.stopPropagation(), e2.goToOption(c$1.First);
      case o$2.End:
        if (n2.shiftKey)
          break;
        return s2.value = false, n2.preventDefault(), n2.stopPropagation(), e2.goToOption(c$1.Last);
      case o$2.PageDown:
        return s2.value = false, n2.preventDefault(), n2.stopPropagation(), e2.goToOption(c$1.Last);
      case o$2.Escape:
        if (s2.value = false, e2.comboboxState.value !== 0)
          return;
        n2.preventDefault(), e2.optionsRef.value && !e2.optionsPropsRef.value.static && n2.stopPropagation(), e2.nullable.value && e2.mode.value === 0 && e2.value.value === null && h2(), e2.closeCombobox();
        break;
      case o$2.Tab:
        if (s2.value = false, e2.comboboxState.value !== 0)
          return;
        e2.mode.value === 0 && e2.activationTrigger.value !== 1 && e2.selectActiveOption(), e2.closeCombobox();
        break;
    }
  }
  function L(n2) {
    T2("change", n2), e2.nullable.value && e2.mode.value === 0 && n2.target.value === "" && h2(), e2.openCombobox();
  }
  function K(n2) {
    var S, w2, t2;
    let y = (S = n2.relatedTarget) != null ? S : t$2.find((I2) => I2 !== n2.currentTarget);
    if (s2.value = false, !((w2 = o$3(e2.optionsRef)) != null && w2.contains(y)) && !((t2 = o$3(e2.buttonRef)) != null && t2.contains(y)) && e2.comboboxState.value === 0)
      return n2.preventDefault(), e2.mode.value === 0 && (e2.nullable.value && e2.value.value === null ? h2() : e2.activationTrigger.value !== 1 && e2.selectActiveOption()), e2.closeCombobox();
  }
  function c$1$1(n2) {
    var S, w2, t2;
    let y = (S = n2.relatedTarget) != null ? S : t$2.find((I2) => I2 !== n2.currentTarget);
    (w2 = o$3(e2.buttonRef)) != null && w2.contains(y) || (t2 = o$3(e2.optionsRef)) != null && t2.contains(y) || e2.disabled.value || e2.immediate.value && e2.comboboxState.value !== 0 && (e2.openCombobox(), o$1().nextFrame(() => {
      e2.setActivationTrigger(1);
    }));
  }
  let g = computed(() => {
    var n2, y, S, w2;
    return (w2 = (S = (y = a.defaultValue) != null ? y : e2.defaultValue.value !== void 0 ? (n2 = a.displayValue) == null ? void 0 : n2.call(a, e2.defaultValue.value) : null) != null ? S : e2.defaultValue.value) != null ? w2 : "";
  });
  return () => {
    var I2, l2, i2, f2, p, O2, C;
    let n2 = { open: e2.comboboxState.value === 0 }, { displayValue: y, onChange: S, ...w2 } = a, t2 = { "aria-controls": (I2 = e2.optionsRef.value) == null ? void 0 : I2.id, "aria-expanded": e2.comboboxState.value === 0, "aria-activedescendant": e2.activeOptionIndex.value === null ? void 0 : e2.virtual.value ? (l2 = e2.options.value.find((F) => !e2.virtual.value.disabled(F.dataRef.value) && e2.compare(F.dataRef.value, e2.virtual.value.options[e2.activeOptionIndex.value]))) == null ? void 0 : l2.id : (i2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : i2.id, "aria-labelledby": (O2 = (f2 = o$3(e2.labelRef)) == null ? void 0 : f2.id) != null ? O2 : (p = o$3(e2.buttonRef)) == null ? void 0 : p.id, "aria-autocomplete": "list", id: u$12, onCompositionstart: V, onCompositionend: P, onKeydown: D, onInput: L, onFocus: c$1$1, onBlur: K, role: "combobox", type: (C = r.type) != null ? C : "text", tabIndex: 0, ref: e2.inputRef, defaultValue: g.value, disabled: e2.disabled.value === true ? true : void 0 };
    return A$4({ ourProps: t2, theirProps: w2, slot: n2, attrs: r, slots: R, features: N$4.RenderStrategy | N$4.Static, name: "ComboboxInput" });
  };
} }), lt = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(a, { attrs: T$1$1, slots: r, expose: R }) {
  let o2 = N("ComboboxOptions"), u2 = `headlessui-combobox-options-${I$1()}`;
  R({ el: o2.optionsRef, $el: o2.optionsRef }), watchEffect(() => {
    o2.optionsPropsRef.value.static = a.static;
  }), watchEffect(() => {
    o2.optionsPropsRef.value.hold = a.hold;
  });
  let e2 = l$2(), v = computed(() => e2 !== null ? (e2.value & i$1.Open) === i$1.Open : o2.comboboxState.value === 0);
  return i$2({ container: computed(() => o$3(o2.optionsRef)), enabled: computed(() => o2.comboboxState.value === 0), accept(s2) {
    return s2.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : s2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(s2) {
    s2.setAttribute("role", "none");
  } }), () => {
    var d2, V, P;
    let s2 = { open: o2.comboboxState.value === 0 }, h$1 = { "aria-labelledby": (P = (d2 = o$3(o2.labelRef)) == null ? void 0 : d2.id) != null ? P : (V = o$3(o2.buttonRef)) == null ? void 0 : V.id, id: u2, ref: o2.optionsRef, role: "listbox", "aria-multiselectable": o2.mode.value === 1 ? true : void 0 }, b = T$1(a, ["hold"]);
    return A$4({ ourProps: h$1, theirProps: b, slot: s2, attrs: T$1$1, slots: o2.virtual.value && o2.comboboxState.value === 0 ? { ...r, default: () => [h(ke, {}, r.default)] } : r, features: N$4.RenderStrategy | N$4.Static, visible: v.value, name: "ComboboxOptions" });
  };
} }), at = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, order: { type: [Number], default: null } }, setup(a, { slots: T$1$1, attrs: r, expose: R }) {
  let o2 = N("ComboboxOption"), u2 = `headlessui-combobox-option-${I$1()}`, e2 = ref(null);
  R({ el: e2, $el: e2 });
  let v = computed(() => {
    var c2;
    return o2.virtual.value ? o2.activeOptionIndex.value === o2.calculateIndex(a.value) : o2.activeOptionIndex.value === null ? false : ((c2 = o2.options.value[o2.activeOptionIndex.value]) == null ? void 0 : c2.id) === u2;
  }), s2 = computed(() => o2.isSelected(a.value)), h2 = inject(ie, null), b = computed(() => ({ disabled: a.disabled, value: a.value, domRef: e2, order: computed(() => a.order) }));
  onMounted(() => o2.registerOption(u2, b)), onUnmounted(() => o2.unregisterOption(u2, v.value)), watchEffect(() => {
    let c2 = o$3(e2);
    c2 && (h2 == null || h2.value.measureElement(c2));
  }), watchEffect(() => {
    o2.comboboxState.value === 0 && v.value && (o2.virtual.value || o2.activationTrigger.value !== 0 && nextTick(() => {
      var c2, g;
      return (g = (c2 = o$3(e2)) == null ? void 0 : c2.scrollIntoView) == null ? void 0 : g.call(c2, { block: "nearest" });
    }));
  });
  function d2(c2) {
    var g;
    if (a.disabled || (g = o2.virtual.value) != null && g.disabled(a.value))
      return c2.preventDefault();
    o2.selectOption(u2), n$2() || requestAnimationFrame(() => {
      var k;
      return (k = o$3(o2.inputRef)) == null ? void 0 : k.focus({ preventScroll: true });
    }), o2.mode.value === 0 && requestAnimationFrame(() => o2.closeCombobox());
  }
  function V() {
    var g;
    if (a.disabled || (g = o2.virtual.value) != null && g.disabled(a.value))
      return o2.goToOption(c$1.Nothing);
    let c$1$1 = o2.calculateIndex(a.value);
    o2.goToOption(c$1.Specific, c$1$1);
  }
  let P = u$4();
  function D(c2) {
    P.update(c2);
  }
  function L(c$1$1) {
    var k;
    if (!P.wasMoved(c$1$1) || a.disabled || (k = o2.virtual.value) != null && k.disabled(a.value) || v.value)
      return;
    let g = o2.calculateIndex(a.value);
    o2.goToOption(c$1.Specific, g, 0);
  }
  function K(c$1$1) {
    var g;
    P.wasMoved(c$1$1) && (a.disabled || (g = o2.virtual.value) != null && g.disabled(a.value) || v.value && (o2.optionsPropsRef.value.hold || o2.goToOption(c$1.Nothing)));
  }
  return () => {
    let { disabled: c2 } = a, g = { active: v.value, selected: s2.value, disabled: c2 }, k = { id: u2, ref: e2, role: "option", tabIndex: c2 === true ? void 0 : -1, "aria-disabled": c2 === true ? true : void 0, "aria-selected": s2.value, disabled: void 0, onClick: d2, onFocus: V, onPointerenter: D, onMouseenter: D, onPointermove: L, onMousemove: L, onPointerleave: K, onMouseleave: K }, n2 = T$1(a, ["order", "value"]);
    return A$4({ ourProps: k, theirProps: n2, slot: g, attrs: r, slots: T$1$1, name: "ComboboxOption" });
  };
} });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.input, input);
const configMenu = mergeConfig(appConfig.ui.strategy, appConfig.ui.inputMenu, inputMenu);
const _sfc_main$1 = defineComponent({
  components: {
    HCombobox: Ze,
    HComboboxButton: tt,
    HComboboxOptions: lt,
    HComboboxOption: at,
    HComboboxInput: ot,
    UIcon: __nuxt_component_2,
    UAvatar: __nuxt_component_1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array],
      default: ""
    },
    query: {
      type: String,
      default: null
    },
    by: {
      type: String,
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    required: {
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
      default: () => configMenu.default.trailingIcon
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
    selectedIcon: {
      type: String,
      default: () => configMenu.default.selectedIcon
    },
    disabled: {
      type: Boolean,
      default: false
    },
    nullable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    padded: {
      type: Boolean,
      default: true
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
      default: null
    },
    search: {
      type: Function,
      default: void 0
    },
    searchAttributes: {
      type: Array,
      default: null
    },
    debounce: {
      type: Number,
      default: 200
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    inputClass: {
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
    },
    uiMenu: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "update:query", "open", "close", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("input", toRef(props, "ui"), config, toRef(props, "class"));
    const { ui: uiMenu } = useUI("inputMenu", toRef(props, "uiMenu"), configMenu);
    const popper = computed(() => defu({}, props.popper, uiMenu.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config);
    const size = computed(() => sizeButtonGroup.value || sizeFormGroup.value);
    const internalQuery = ref("");
    const query = computed({
      get() {
        var _a;
        return (_a = props.query) != null ? _a : internalQuery.value;
      },
      set(value) {
        internalQuery.value = value;
        emit("update:query", value);
      }
    });
    const label = computed(() => {
      if (!props.modelValue) {
        return;
      }
      if (props.valueAttribute) {
        const option = props.options.find((option2) => option2[props.valueAttribute] === props.modelValue);
        return option ? option[props.optionAttribute] : null;
      } else {
        return ["string", "number"].includes(typeof props.modelValue) ? props.modelValue : props.modelValue[props.optionAttribute];
      }
    });
    const inputClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.placeholder,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.inputClass);
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
    const debouncedSearch = props.search && typeof props.search === "function" ? useDebounceFn(props.search, props.debounce) : void 0;
    const filteredOptions = computedAsync(async () => {
      if (debouncedSearch) {
        return await debouncedSearch(query.value);
      }
      if (query.value === "") {
        return props.options;
      }
      return props.options.filter((option) => {
        var _a;
        return (((_a = props.searchAttributes) == null ? void 0 : _a.length) ? props.searchAttributes : [props.optionAttribute]).some((searchAttribute) => {
          if (["string", "number"].includes(typeof option)) {
            return String(option).search(new RegExp(query.value, "i")) !== -1;
          }
          const child = get(option, searchAttribute);
          return child !== null && child !== void 0 && String(child).search(new RegExp(query.value, "i")) !== -1;
        });
      });
    });
    watch(container, (value) => {
      if (value) {
        emit("open");
      } else {
        emit("close");
        emitFormBlur();
      }
    });
    function onUpdate(event) {
      query.value = "";
      emit("update:modelValue", event);
      emit("change", event);
      emitFormChange();
    }
    function onChange(event) {
      query.value = event.target.value;
    }
    l$3(() => useId("$rmVkbu9zy7"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      // eslint-disable-next-line vue/no-dupe-keys
      uiMenu,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      label,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      filteredOptions,
      // eslint-disable-next-line vue/no-dupe-keys
      query,
      onUpdate,
      onChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HCombobox = resolveComponent("HCombobox");
  const _component_HComboboxInput = resolveComponent("HComboboxInput");
  const _component_UIcon = __nuxt_component_2;
  const _component_HComboboxButton = resolveComponent("HComboboxButton");
  const _component_HComboboxOptions = resolveComponent("HComboboxOptions");
  const _component_HComboboxOption = resolveComponent("HComboboxOption");
  const _component_UAvatar = __nuxt_component_1;
  _push(ssrRenderComponent(_component_HCombobox, mergeProps({
    by: _ctx.by,
    name: _ctx.name,
    "model-value": _ctx.modelValue,
    disabled: _ctx.disabled,
    nullable: _ctx.nullable,
    as: "div",
    class: _ctx.ui.wrapper,
    "onUpdate:modelValue": _ctx.onUpdate
  }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="${ssrRenderClass(_ctx.uiMenu.trigger)}"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_HComboboxInput, mergeProps({
          id: _ctx.inputId,
          name: _ctx.name,
          required: _ctx.required,
          placeholder: _ctx.placeholder,
          disabled: _ctx.disabled,
          class: _ctx.inputClass,
          autocomplete: "off"
        }, _ctx.attrs, {
          "display-value": () => _ctx.query ? _ctx.query : _ctx.label,
          onChange: _ctx.onChange
        }), null, _parent2, _scopeId));
        if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
          _push2(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "leading", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass
            }, null, _parent2, _scopeId));
          }, _push2, _parent2, _scopeId);
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
          _push2(ssrRenderComponent(_component_HComboboxButton, {
            ref: "trigger",
            class: _ctx.trailingWrapperIconClass
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "trailing", {
                  disabled: _ctx.disabled,
                  loading: _ctx.loading
                }, () => {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: _ctx.trailingIconName,
                    class: _ctx.trailingIconClass
                  }, null, _parent3, _scopeId2));
                }, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "trailing", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => [
                    createVNode(_component_UIcon, {
                      name: _ctx.trailingIconName,
                      class: _ctx.trailingIconClass
                    }, null, 8, ["name", "class"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.uiMenu.container, _ctx.uiMenu.width])}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.uiMenu.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_HComboboxOptions, {
            static: "",
            class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.filteredOptions, (option, index) => {
                  _push3(ssrRenderComponent(_component_HComboboxOption, {
                    key: index,
                    as: "template",
                    value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                    disabled: option.disabled
                  }, {
                    default: withCtx(({ active, selected, disabled: optionDisabled }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option", {
                          option,
                          active,
                          selected
                        }, () => {
                          if (option.icon) {
                            _push4(ssrRenderComponent(_component_UIcon, {
                              name: option.icon,
                              class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                              "aria-hidden": "true"
                            }, null, _parent4, _scopeId3));
                          } else if (option.avatar) {
                            _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                              class: _ctx.uiMenu.option.avatar.base,
                              "aria-hidden": "true"
                            }), null, _parent4, _scopeId3));
                          } else if (option.chip) {
                            _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.chip.base)}" style="${ssrRenderStyle({ background: `#${option.chip}` })}"${_scopeId3}></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute])}</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        if (selected) {
                          _push4(`<span class="${ssrRenderClass([_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding])}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: _ctx.selectedIcon,
                            class: _ctx.uiMenu.option.selectedIcon.base,
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option", {
                                option,
                                active,
                                selected
                              }, () => [
                                option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: option.icon,
                                  class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                  class: _ctx.uiMenu.option.avatar.base,
                                  "aria-hidden": "true"
                                }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: _ctx.uiMenu.option.chip.base,
                                  style: { background: `#${option.chip}` }
                                }, null, 6)) : createCommentVNode("", true),
                                createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                              ])
                            ], 2),
                            selected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                            }, [
                              createVNode(_component_UIcon, {
                                name: _ctx.selectedIcon,
                                class: _ctx.uiMenu.option.selectedIcon.base,
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
                if (_ctx.query && !_ctx.filteredOptions.length) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.option.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => {
                    _push3(` No results for &quot;${ssrInterpolate(_ctx.query)}&quot;. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else if (!_ctx.filteredOptions.length) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => {
                    _push3(` No options. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                    return openBlock(), createBlock(_component_HComboboxOption, {
                      key: index,
                      as: "template",
                      value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                      disabled: option.disabled
                    }, {
                      default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                        createVNode("li", {
                          class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                        }, [
                          createVNode("div", {
                            class: _ctx.uiMenu.option.container
                          }, [
                            renderSlot(_ctx.$slots, "option", {
                              option,
                              active,
                              selected
                            }, () => [
                              option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                key: 0,
                                name: option.icon,
                                class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                class: _ctx.uiMenu.option.avatar.base,
                                "aria-hidden": "true"
                              }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: _ctx.uiMenu.option.chip.base,
                                style: { background: `#${option.chip}` }
                              }, null, 6)) : createCommentVNode("", true),
                              createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                            ])
                          ], 2),
                          selected ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                          }, [
                            createVNode(_component_UIcon, {
                              name: _ctx.selectedIcon,
                              class: _ctx.uiMenu.option.selectedIcon.base,
                              "aria-hidden": "true"
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]);
                  }), 128)),
                  _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: _ctx.uiMenu.option.empty
                  }, [
                    renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                      createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                    ])
                  ], 2)) : !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                    key: 1,
                    class: _ctx.uiMenu.empty
                  }, [
                    renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                      createTextVNode(" No options. ")
                    ])
                  ], 2)) : createCommentVNode("", true)
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
          createVNode("div", {
            class: _ctx.uiMenu.trigger
          }, [
            createVNode(_component_HComboboxInput, mergeProps({
              id: _ctx.inputId,
              name: _ctx.name,
              required: _ctx.required,
              placeholder: _ctx.placeholder,
              disabled: _ctx.disabled,
              class: _ctx.inputClass,
              autocomplete: "off"
            }, _ctx.attrs, {
              "display-value": () => _ctx.query ? _ctx.query : _ctx.label,
              onChange: _ctx.onChange
            }), null, 16, ["id", "name", "required", "placeholder", "disabled", "class", "display-value", "onChange"]),
            _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
              key: 0,
              class: _ctx.leadingWrapperIconClass
            }, [
              renderSlot(_ctx.$slots, "leading", {
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => [
                createVNode(_component_UIcon, {
                  name: _ctx.leadingIconName,
                  class: _ctx.leadingIconClass
                }, null, 8, ["name", "class"])
              ])
            ], 2)) : createCommentVNode("", true),
            _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock(_component_HComboboxButton, {
              key: 1,
              ref: "trigger",
              class: _ctx.trailingWrapperIconClass
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "trailing", {
                  disabled: _ctx.disabled,
                  loading: _ctx.loading
                }, () => [
                  createVNode(_component_UIcon, {
                    name: _ctx.trailingIconName,
                    class: _ctx.trailingIconClass
                  }, null, 8, ["name", "class"])
                ])
              ]),
              _: 3
            }, 8, ["class"])) : createCommentVNode("", true)
          ], 2),
          open ? (openBlock(), createBlock("div", {
            key: 0,
            ref: "container",
            class: [_ctx.uiMenu.container, _ctx.uiMenu.width]
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.uiMenu.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.uiMenu.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  createVNode(_component_HComboboxOptions, {
                    static: "",
                    class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                        return openBlock(), createBlock(_component_HComboboxOption, {
                          key: index,
                          as: "template",
                          value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                          disabled: option.disabled
                        }, {
                          default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                            createVNode("li", {
                              class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                            }, [
                              createVNode("div", {
                                class: _ctx.uiMenu.option.container
                              }, [
                                renderSlot(_ctx.$slots, "option", {
                                  option,
                                  active,
                                  selected
                                }, () => [
                                  option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 0,
                                    name: option.icon,
                                    class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                    "aria-hidden": "true"
                                  }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                    class: _ctx.uiMenu.option.avatar.base,
                                    "aria-hidden": "true"
                                  }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: _ctx.uiMenu.option.chip.base,
                                    style: { background: `#${option.chip}` }
                                  }, null, 6)) : createCommentVNode("", true),
                                  createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                                ])
                              ], 2),
                              selected ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                              }, [
                                createVNode(_component_UIcon, {
                                  name: _ctx.selectedIcon,
                                  class: _ctx.uiMenu.option.selectedIcon.base,
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["value", "disabled"]);
                      }), 128)),
                      _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: _ctx.uiMenu.option.empty
                      }, [
                        renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                          createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                        ])
                      ], 2)) : !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                        key: 1,
                        class: _ctx.uiMenu.empty
                      }, [
                        renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                          createTextVNode(" No options. ")
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    _: 3
                  }, 8, ["class"])
                ])
              ]),
              _: 3
            }, 16)
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.14.2_nuxt@3.11.0_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui/dist/runtime/components/forms/InputMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    let books = ref([]);
    let book = ref(null);
    let audios = ref([]);
    let audio_id = ref(null);
    let isOpen = ref(false);
    let isOpenEdit = ref(false);
    let isLoading = ref(true);
    let audio_url = ref(null);
    let audio_content = ref(null);
    let text = ref(null);
    const columns = [
      {
        key: "name",
        label: "Nomi"
      },
      {
        key: "audio_content",
        label: "Matni"
      },
      {
        key: "book_id.name",
        label: "Kitob"
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
          click: () => deleteAudio(row._id)
        },
        {
          label: "Tahrirlash",
          icon: "i-heroicons-pencil-square-20-solid",
          click: () => editAudio(row)
        }
      ]
    ];
    const editAudio = (row) => {
      isOpenEdit.value = true;
      book.value = row.book_id._id;
      audio_content.value = row.audio_content;
      text.value = row.name;
      audio_id.value = row._id;
    };
    const deleteAudio = async (id) => {
      isLoading.value = true;
      try {
        const data = await $fetch(BASE_URL + "/audios/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        if (data.status === 200) {
          toast.add({ title: data.message });
          const res = await $fetch(BASE_URL + "/audios", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
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
      audio_url.value = event.target.files[0];
    }
    const addBanner = async () => {
      isLoading.value = true;
      try {
        const formdata = new FormData();
        formdata.append("file", audio_url.value);
        console.log(formdata);
        const { data } = await $fetch(CDN_URL + "/upload", {
          method: "POST",
          body: formdata
        });
        await $fetch(BASE_URL + "/audios", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({
            audio_url: data.fileUrl,
            name: text.value,
            book_id: book.value,
            audio_content: audio_content.value
          })
        });
        isOpen.value = false;
        toast.add({ title: "Qo'shildi" });
        const res = await $fetch(BASE_URL + "/audios", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        audio_url.value = null;
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
    const handleEditAudio = async () => {
      isLoading.value = true;
      try {
        await $fetch(BASE_URL + "/audios/" + audio_id.value, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({
            name: text.value,
            book_id: book.value,
            audio_content: audio_content.value
          })
        });
        isOpenEdit.value = false;
        toast.add({ title: "Yangilandi" });
        const res = await $fetch(BASE_URL + "/audios", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        audio_url.value = null;
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
        }
      }
    });
    defineShortcuts({
      escape: {
        usingInput: true,
        whenever: [isOpenEdit],
        handler: () => {
          isOpenEdit.value = false;
          book.value = null;
          text.value = null;
          audio_content.value = null;
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_0$1;
      const _component_UTable = __nuxt_component_1$1;
      const _component_UDropdown = __nuxt_component_2$1;
      const _component_UModal = __nuxt_component_4;
      const _component_UCard = __nuxt_component_5;
      const _component_UForm = __nuxt_component_6;
      const _component_UFormGroup = __nuxt_component_7$1;
      const _component_UInputMenu = __nuxt_component_7;
      const _component_UInput = __nuxt_component_8;
      const _component_UTextarea = __nuxt_component_8$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-2xl font-bold">Audiolar</div><div class="shadow-2xl border border-gray-500 items-center my-4"><div class="flex p-4 justify-end">`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "lg",
        onClick: ($event) => isRef(isOpen) ? isOpen.value = true : isOpen = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Audio Qo&#39;shish`);
          } else {
            return [
              createTextVNode("Audio Qo'shish")
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
        rows: unref(audios),
        "empty-state": {
          icon: "i-heroicons-circle-stack-20-solid",
          label: "Audiolar Mavjud Emas"
        }
      }, {
        "audio_content-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="whitespace-pre-line w-[300px]"${_scopeId}>${ssrInterpolate(row.audio_content)}</div>`);
          } else {
            return [
              createVNode("div", { class: "whitespace-pre-line w-[300px]" }, toDisplayString(row.audio_content), 1)
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
              label: "Audio Qo'shish",
              onClick: ($event) => isRef(isOpen) ? isOpen.value = true : isOpen = true
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-center py-6 gap-3" }, [
                createVNode("span", { class: "italic text-sm" }, "Ma'lumot Mavjud Emas"),
                createVNode(_component_UButton, {
                  label: "Audio Qo'shish",
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
                  _push3(ssrRenderComponent(_component_UForm, { onSubmit: addBanner }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Kategoriyasi",
                          name: "photo"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInputMenu, {
                                modelValue: unref(book),
                                "onUpdate:modelValue": ($event) => isRef(book) ? book.value = $event : book = $event,
                                options: unref(books),
                                placeholder: "Kitobni Tanglang",
                                by: "_id",
                                "value-attribute": "_id",
                                "option-attribute": "name",
                                "search-attributes": ["name"]
                              }, {
                                option: withCtx(({ option: item }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="truncate"${_scopeId5}>${ssrInterpolate(item.name)}</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "truncate" }, toDisplayString(item.name), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInputMenu, {
                                  modelValue: unref(book),
                                  "onUpdate:modelValue": ($event) => isRef(book) ? book.value = $event : book = $event,
                                  options: unref(books),
                                  placeholder: "Kitobni Tanglang",
                                  by: "_id",
                                  "value-attribute": "_id",
                                  "option-attribute": "name",
                                  "search-attributes": ["name"]
                                }, {
                                  option: withCtx(({ option: item }) => [
                                    createVNode("span", { class: "truncate" }, toDisplayString(item.name), 1)
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Audioni Nomi",
                          name: "photo",
                          size: "lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(text),
                                "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : text = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(text),
                                  "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : text = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Audioni Matni",
                          name: "photo",
                          size: "lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UTextarea, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(audio_content),
                                "onUpdate:modelValue": ($event) => isRef(audio_content) ? audio_content.value = $event : audio_content = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UTextarea, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(audio_content),
                                  "onUpdate:modelValue": ($event) => isRef(audio_content) ? audio_content.value = $event : audio_content = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Audioni Yuklang",
                          name: "photo",
                          size: "lg"
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
                            label: "Kitob Kategoriyasi",
                            name: "photo"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInputMenu, {
                                modelValue: unref(book),
                                "onUpdate:modelValue": ($event) => isRef(book) ? book.value = $event : book = $event,
                                options: unref(books),
                                placeholder: "Kitobni Tanglang",
                                by: "_id",
                                "value-attribute": "_id",
                                "option-attribute": "name",
                                "search-attributes": ["name"]
                              }, {
                                option: withCtx(({ option: item }) => [
                                  createVNode("span", { class: "truncate" }, toDisplayString(item.name), 1)
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Audioni Nomi",
                            name: "photo",
                            size: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(text),
                                "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : text = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Audioni Matni",
                            name: "photo",
                            size: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UTextarea, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(audio_content),
                                "onUpdate:modelValue": ($event) => isRef(audio_content) ? audio_content.value = $event : audio_content = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Audioni Yuklang",
                            name: "photo",
                            size: "lg"
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
                          label: "Kitob Kategoriyasi",
                          name: "photo"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInputMenu, {
                              modelValue: unref(book),
                              "onUpdate:modelValue": ($event) => isRef(book) ? book.value = $event : book = $event,
                              options: unref(books),
                              placeholder: "Kitobni Tanglang",
                              by: "_id",
                              "value-attribute": "_id",
                              "option-attribute": "name",
                              "search-attributes": ["name"]
                            }, {
                              option: withCtx(({ option: item }) => [
                                createVNode("span", { class: "truncate" }, toDisplayString(item.name), 1)
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Audioni Nomi",
                          name: "photo",
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(text),
                              "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : text = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Audioni Matni",
                          name: "photo",
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UTextarea, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(audio_content),
                              "onUpdate:modelValue": ($event) => isRef(audio_content) ? audio_content.value = $event : audio_content = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Audioni Yuklang",
                          name: "photo",
                          size: "lg"
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
                  createVNode(_component_UForm, { onSubmit: addBanner }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Kitob Kategoriyasi",
                        name: "photo"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInputMenu, {
                            modelValue: unref(book),
                            "onUpdate:modelValue": ($event) => isRef(book) ? book.value = $event : book = $event,
                            options: unref(books),
                            placeholder: "Kitobni Tanglang",
                            by: "_id",
                            "value-attribute": "_id",
                            "option-attribute": "name",
                            "search-attributes": ["name"]
                          }, {
                            option: withCtx(({ option: item }) => [
                              createVNode("span", { class: "truncate" }, toDisplayString(item.name), 1)
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Audioni Nomi",
                        name: "photo",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(text),
                            "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : text = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Audioni Matni",
                        name: "photo",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UTextarea, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(audio_content),
                            "onUpdate:modelValue": ($event) => isRef(audio_content) ? audio_content.value = $event : audio_content = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Audioni Yuklang",
                        name: "photo",
                        size: "lg"
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
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}> Audio Qo&#39;shish </h3>`);
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
                      createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Audio Qo'shish "),
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
                  _push3(ssrRenderComponent(_component_UForm, { onSubmit: handleEditAudio }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Kategoriyasi",
                          name: "photo"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInputMenu, {
                                modelValue: unref(book),
                                "onUpdate:modelValue": ($event) => isRef(book) ? book.value = $event : book = $event,
                                options: unref(books),
                                placeholder: "Kitobni Tanglang",
                                by: "_id",
                                "value-attribute": "_id",
                                "option-attribute": "name",
                                "search-attributes": ["name"]
                              }, {
                                option: withCtx(({ option: item }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="truncate"${_scopeId5}>${ssrInterpolate(item.name)}</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "truncate" }, toDisplayString(item.name), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInputMenu, {
                                  modelValue: unref(book),
                                  "onUpdate:modelValue": ($event) => isRef(book) ? book.value = $event : book = $event,
                                  options: unref(books),
                                  placeholder: "Kitobni Tanglang",
                                  by: "_id",
                                  "value-attribute": "_id",
                                  "option-attribute": "name",
                                  "search-attributes": ["name"]
                                }, {
                                  option: withCtx(({ option: item }) => [
                                    createVNode("span", { class: "truncate" }, toDisplayString(item.name), 1)
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Audioni Nomi",
                          name: "photo",
                          size: "lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(text),
                                "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : text = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(text),
                                  "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : text = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Audioni Matni",
                          name: "photo",
                          size: "lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UTextarea, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(audio_content),
                                "onUpdate:modelValue": ($event) => isRef(audio_content) ? audio_content.value = $event : audio_content = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UTextarea, {
                                  type: "text",
                                  size: "lg",
                                  modelValue: unref(audio_content),
                                  "onUpdate:modelValue": ($event) => isRef(audio_content) ? audio_content.value = $event : audio_content = $event
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
                            label: "Kitob Kategoriyasi",
                            name: "photo"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInputMenu, {
                                modelValue: unref(book),
                                "onUpdate:modelValue": ($event) => isRef(book) ? book.value = $event : book = $event,
                                options: unref(books),
                                placeholder: "Kitobni Tanglang",
                                by: "_id",
                                "value-attribute": "_id",
                                "option-attribute": "name",
                                "search-attributes": ["name"]
                              }, {
                                option: withCtx(({ option: item }) => [
                                  createVNode("span", { class: "truncate" }, toDisplayString(item.name), 1)
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Audioni Nomi",
                            name: "photo",
                            size: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(text),
                                "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : text = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "my-[2%]",
                            label: "Audioni Matni",
                            name: "photo",
                            size: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UTextarea, {
                                type: "text",
                                size: "lg",
                                modelValue: unref(audio_content),
                                "onUpdate:modelValue": ($event) => isRef(audio_content) ? audio_content.value = $event : audio_content = $event
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
                    createVNode(_component_UForm, { onSubmit: handleEditAudio }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Kitob Kategoriyasi",
                          name: "photo"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInputMenu, {
                              modelValue: unref(book),
                              "onUpdate:modelValue": ($event) => isRef(book) ? book.value = $event : book = $event,
                              options: unref(books),
                              placeholder: "Kitobni Tanglang",
                              by: "_id",
                              "value-attribute": "_id",
                              "option-attribute": "name",
                              "search-attributes": ["name"]
                            }, {
                              option: withCtx(({ option: item }) => [
                                createVNode("span", { class: "truncate" }, toDisplayString(item.name), 1)
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Audioni Nomi",
                          name: "photo",
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(text),
                              "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : text = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "my-[2%]",
                          label: "Audioni Matni",
                          name: "photo",
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UTextarea, {
                              type: "text",
                              size: "lg",
                              modelValue: unref(audio_content),
                              "onUpdate:modelValue": ($event) => isRef(audio_content) ? audio_content.value = $event : audio_content = $event
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
                      onClick: ($event) => isRef(isOpenEdit) ? isOpenEdit.value = false : isOpenEdit = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, { onSubmit: handleEditAudio }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Kitob Kategoriyasi",
                        name: "photo"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInputMenu, {
                            modelValue: unref(book),
                            "onUpdate:modelValue": ($event) => isRef(book) ? book.value = $event : book = $event,
                            options: unref(books),
                            placeholder: "Kitobni Tanglang",
                            by: "_id",
                            "value-attribute": "_id",
                            "option-attribute": "name",
                            "search-attributes": ["name"]
                          }, {
                            option: withCtx(({ option: item }) => [
                              createVNode("span", { class: "truncate" }, toDisplayString(item.name), 1)
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Audioni Nomi",
                        name: "photo",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(text),
                            "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : text = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "my-[2%]",
                        label: "Audioni Matni",
                        name: "photo",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UTextarea, {
                            type: "text",
                            size: "lg",
                            modelValue: unref(audio_content),
                            "onUpdate:modelValue": ($event) => isRef(audio_content) ? audio_content.value = $event : audio_content = $event
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/audios/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BDKE9DQ7.mjs.map
