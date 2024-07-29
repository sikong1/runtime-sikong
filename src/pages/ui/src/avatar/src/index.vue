<template>
  <div
    v-if="visible"
    :class="[
      'cube-avatar-container',
      `cube-avatar-container--${config.shape}`,
      `cube-avatar-container--${config.size}`,
    ]"
  >
    <div
      class="cube-avatar"
      :class="[
        `cube-avatar--${config.shape}`,
        `cube-avatar--${config.size}`,
        config.showBorder ? 'cube-avatar--border' : '',
      ]"
      :style="[
        {
          backgroundColor:
            config.text || config.icon
              ? config.randomBgColor
                ? colors[config.colorIndex !== '' ? config.colorIndex : Math.floor(Math.random() * 19)]
                : config.bgColor
              : '',
          width: sizeStyle,
          height: sizeStyle,
        },
        addStyle(config.style || {}),
      ]"
      @tap.stop="clickHandler"
    >
      <slot>
        <template v-if="config.mpAvatar && allowMp" />
        <span
          v-else-if="config.text"
          :style="{ fontSize: config.fontSize, color: config.color }"
          align="center"
          custom-style="justify-content: center"
          >{{ config.text }}</span
        >
        <!-- <cube-icon
          v-else-if="config.icon"
          display="flex"
          type="font"
          :name="config.icon"
          :size="config.fontSize"
          :color="config.color"
        /> -->
        <span v-else-if="config.icon">{{ config.icon }}</span>
        <img
          v-else
          class="cube-avatar__image"
          :class="[`cube-avatar__image--${config.shape}`]"
          :src="avatarUrl || errorImage"
          :mode="config.mode"
          :style="[
            {
              width: sizeStyle,
              height: sizeStyle,
            },
          ]"
          @error="errorHandler"
        />
      </slot>
    </div>
    <!--#ifdef VUE3-->
    <div v-if="$slots['description'] || config.description || config.title" class="cube-avatar-introduce">
      <div v-if="$slots['description']">
        <slot name="description" />
      </div>
      <div v-else>
        <div class="cube-avatar__title">{{ config.title }}</div>
        <div class="cube-avatar__description">{{ config.description }}</div>
      </div>
    </div>
    <!--#endif-->
  </div>
</template>
<script setup lang="ts">
import { computed, defineEmits, ref } from 'vue';

import type { MComponent } from '@tmagic/schema';
import { useApp } from '@tmagic/vue-runtime-help';

import { addStyle, addUnit } from '../../utils';

interface AvatarSchema extends MComponent {
  type: 'avatar';
  text: string;
}

const props = withDefaults(
  defineProps<{
    config: AvatarSchema;
    model?: any;
  }>(),
  {
    model: () => ({}),
  },
);
const emits = defineEmits(['onClick']);

const colors = [
  '#ffb34b',
  '#f2bba9',
  '#f7a196',
  '#f18080',
  '#88a867',
  '#bfbf39',
  '#89c152',
  '#94d554',
  '#f19ec2',
  '#afaae4',
  '#e1b0df',
  '#c38cc1',
  '#72dcdc',
  '#9acdcb',
  '#77b1cc',
  '#448aca',
  '#86cefa',
  '#98d1ee',
  '#73d1f1',
  '#80a7dc',
];
const avatarUrl = ref(
  'https://front-end-huawei-cdn.devops.cndinfo.com/npm/@cndinfo/cube-design-mobile/images/avatar/cube-mobile-avatar-default.png',
);
const allowMp = ref(false);
const errorImage = ref(
  'https://front-end-huawei-cdn.devops.cndinfo.com/npm/@cndinfo/cube-design-mobile/images/avatar/cube-mobile-avatar-default.png',
);

const sizeStyle = computed(() => {
  let { defaultSize } = props.config;
  console.log(props.config, 'props.config.size');

  if (typeof props.config.size === 'number') {
    return `${props.config.size}px`;
  }
  switch (props.config.size) {
    case 'small':
      defaultSize = props.config.smallSize;
      break;
    case 'mini':
      defaultSize = props.config.miniSize;
      break;
    case 'medium':
      defaultSize = props.config.defaultSize;
      break;
    case 'large':
      defaultSize = props.config.largeSize;
      break;
    case 'xlarge':
      defaultSize = props.config.xLargeSize;
      break;
    case '2xlarge':
      defaultSize = props.config.xxLargeSize;
      break;
    default:
      defaultSize = addUnit(props.config.size);
  }

  return addUnit(defaultSize);
});

const init = () => {
  allowMp.value = true;
};
init();

const clickHandler = () => {
  emits('onClick');
};
const errorHandler = () => {
  avatarUrl.value = props.config?.defaultUrl || errorImage.value;
};

const visible = ref(true);

useApp({
  config: props.config,
  methods: {
    avatarVisible() {
      visible.value = !visible.value;
    },
  },
});
</script>
<style lang="scss" scoped>
// @import '../../style/index.scss';

.cube-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  // 解决当 text/icon 属性值过长时不隐藏的问题
  overflow: hidden;
  background-color: $cdm-avatar-bg-color;

  ::v-deep .cube-icon-font {
    color: $cdm-avatar-icon-color;
  }
  ::v-deep .cube-text__value {
    color: $cdm-avatar-text-font-color;
  }
  &-container {
    display: inline-flex;
    align-items: center;
    flex-direction: row;

    &--mini {
      .cube-avatar-introduce {
        margin-left: $cdm-avatar-mini-title-margin-left;
      }
      .cube-avatar__title {
        font-size: $cdm-avatar-mini-title-font-size;
      }
      .cube-avatar__description {
        margin-top: $cdm-avatar-mini-title-margin-bottom;
        font-size: $cdm-avatar-mini-description-font-size;
      }
    }

    &--small {
      .cube-avatar-introduce {
        margin-left: $cdm-avatar-small-title-margin-left;
      }
      .cube-avatar__title {
        font-size: $cdm-avatar-small-title-font-size;
      }
      .cube-avatar__description {
        margin-top: $cdm-avatar-small-title-margin-bottom;
        font-size: $cdm-avatar-small-description-font-size;
      }
    }

    &--medium {
      .cube-avatar-introduce {
        margin-left: $cdm-avatar-medium-title-margin-left;
      }
      .cube-avatar__title {
        font-size: $cdm-avatar-medium-title-font-size;
      }
      .cube-avatar__description {
        margin-top: $cdm-avatar-medium-title-margin-bottom;
        font-size: $cdm-avatar-medium-description-font-size;
      }
    }

    &--large {
      .cube-avatar-introduce {
        margin-left: $cdm-avatar-large-title-margin-left;
      }
      .cube-avatar__title {
        font-size: $cdm-avatar-large-title-font-size;
      }
      .cube-avatar__description {
        margin-top: $cdm-avatar-large-title-margin-bottom;
        font-size: $cdm-avatar-large-description-font-size;
      }
    }

    &--xlarge {
      .cube-avatar-introduce {
        margin-left: $cdm-avatar-xlarge-title-margin-left;
      }
      .cube-avatar__title {
        font-size: $cdm-avatar-xlarge-title-font-size;
      }
      .cube-avatar__description {
        margin-top: $cdm-avatar-xlarge-title-margin-bottom;
        font-size: $cdm-avatar-xlarge-description-font-size;
      }
    }

    &--2xlarge {
      .cube-avatar-introduce {
        margin-left: $cdm-avatar-2xlarge-title-margin-left;
      }
      .cube-avatar__title {
        font-size: $cdm-avatar-2xlarge-title-font-size;
      }
      .cube-avatar__description {
        margin-top: $cdm-avatar-2xlarge-title-margin-bottom;
        font-size: $cdm-avatar-2xlarge-description-font-size;
      }
    }
  }
  &-introduce {
    margin-left: $cdm-avatar-medium-title-margin-left;
  }
  &__title {
    font-weight: $cdm-avatar-title-font-weight;
    color: $cdm-avatar-title-font-color;
  }
  &__description {
    color: $cdm-avatar-description-font-color;
  }
  &--border {
    border-style: solid;
    border-color: $cdm-avatar-border-color;
  }

  &--round {
    border-radius: 50%;
  }

  &--square {
    border-radius: $cdm-avatar-medium-border-radius;
  }

  &__image {
    width: 100%;
    height: 100%;
    &--round {
      border-radius: 50%;
    }

    &--square {
      border-radius: $cdm-avatar-medium-border-radius;
    }
  }

  &--mini {
    width: $cdm-avatar-mini-size;
    height: $cdm-avatar-mini-size;
    border-width: $cdm-avatar-mini-border-width;
    ::v-deep .cube-icon-font {
      font-size: $cdm-avatar-mini-icon-size;
      line-height: $cdm-avatar-mini-icon-size;
    }
    ::v-deep .cube-text__value {
      font-size: $cdm-avatar-mini-text-font-size;
    }
    &.cube-avatar-border {
      border-width: $cdm-avatar-mini-border-width;
    }
    &.cube-avatar--square {
      border-radius: $cdm-avatar-mini-border-radius;
    }
    .cube-avatar--image--square {
      border-radius: $cdm-avatar-mini-border-radius;
    }
  }

  &--small {
    width: $cdm-avatar-small-size;
    height: $cdm-avatar-small-size;
    border-width: $cdm-avatar-small-border-width;
    ::v-deep .cube-icon-font {
      font-size: $cdm-avatar-small-icon-size;
      line-height: $cdm-avatar-small-icon-size;
    }
    ::v-deep .cube-text__value {
      font-size: $cdm-avatar-small-text-font-size;
    }

    &.cube-avatar-border {
      border-width: $cdm-avatar-small-border-width;
    }
    &.cube-avatar--square {
      border-radius: $cdm-avatar-small-border-radius;
    }
    .cube-avatar--image--square {
      border-radius: $cdm-avatar-small-border-radius;
    }
  }

  &--medium {
    width: $cdm-avatar-medium-size;
    height: $cdm-avatar-medium-size;
    ::v-deep .cube-icon-font {
      font-size: $cdm-avatar-medium-icon-size;
      line-height: $cdm-avatar-medium-icon-size;
    }
    ::v-deep .cube-text__value {
      font-size: $cdm-avatar-medium-text-font-size;
    }
    .cube-avatar-introduce {
      margin-left: $cdm-avatar-medium-title-margin-left;
    }
    .cube-avatar-title {
      font-size: $cdm-avatar-medium-title-font-size;
    }
    .cube-avatar-description {
      font-size: $cdm-avatar-medium-description-font-size;
    }
    &.cube-avatar-border {
      border-width: $cdm-avatar-medium-border-width;
    }
    &.cube-avatar--square {
      border-radius: $cdm-avatar-medium-border-radius;
    }
    .cube-avatar--image--square {
      border-radius: $cdm-avatar-medium-border-radius;
    }
  }

  &--large {
    width: $cdm-avatar-large-size;
    height: $cdm-avatar-large-size;
    ::v-deep .cube-icon-font {
      font-size: $cdm-avatar-large-icon-size;
      line-height: $cdm-avatar-large-icon-size;
    }
    ::v-deep .cube-text__value {
      font-size: $cdm-avatar-large-text-font-size;
    }

    &.cube-avatar-border {
      border-width: $cdm-avatar-large-border-width;
    }
    &.cube-avatar--square {
      border-radius: $cdm-avatar-large-border-radius;
    }
    .cube-avatar--image--square {
      border-radius: $cdm-avatar-large-border-radius;
    }
  }

  &--xlarge {
    width: $cdm-avatar-xlarge-size;
    height: $cdm-avatar-xlarge-size;
    ::v-deep .cube-icon-font {
      font-size: $cdm-avatar-xlarge-icon-size;
      line-height: $cdm-avatar-xlarge-icon-size;
    }
    ::v-deep .cube-text__value {
      font-size: $cdm-avatar-xlarge-text-font-size;
    }
    &.cube-avatar-border {
      border-width: $cdm-avatar-xlarge-border-width;
    }
    &.cube-avatar--square {
      border-radius: $cdm-avatar-xlarge-border-radius;
    }
    .cube-avatar--image--square {
      border-radius: $cdm-avatar-xlarge-border-radius;
    }
  }

  &--2xlarge {
    width: $cdm-avatar-2xlarge-size;
    height: $cdm-avatar-2xlarge-size;
    ::v-deep .cube-icon-font {
      font-size: $cdm-avatar-2xlarge-icon-size;
      line-height: $cdm-avatar-2xlarge-icon-size;
    }
    ::v-deep .cube-text__value {
      font-size: $cdm-avatar-2xlarge-text-font-size;
    }

    &.cube-avatar-border {
      border-width: $cdm-avatar-2xlarge-border-width;
    }
    &.cube-avatar--square {
      border-radius: $cdm-avatar-2xlarge-border-radius;
    }
    .cube-avatar--image--square {
      border-radius: $cdm-avatar-2xlarge-border-radius;
    }
  }
}
</style>
