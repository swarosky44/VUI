<template>
  <button type="button" :class="['btn', type, fillType, isRound ? 'round' : '', isBig ? 'big' : '']">
    {{ $slots.default[0].text }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'usual'
    },
    isRound: {
      type: Boolean,
      default: false
    },
    isBig: {
      type: Boolean,
      default: false
    },
    isFill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    fillType () {
      if (this.isFill) {
        return `${this.type}-fill`
      }
      return ''
    }
  }
}
</script>

<style lang="less" scoped>
  @usaul-blue: #0894ec;
  @success-green: #4cd964;
  @danger-red: #f6383a;
  @warning-orange: #ff6600;

  .btn {
    display: block;
    width: 100%;
    height: 1.5rem;
    border-radius: .25rem;
    font-size: .7rem;
  }
  .usual {
    border: 1px solid @usaul-blue;
    color: @usaul-blue;
  }
  .usual-fill {
    background: @usaul-blue;
    color: #fff;
  }
  .success {
    border: 1px solid @success-green;
    color: @success-green;
  }
  .success-fill {
    background: @success-green;
    color: #fff;
  }
  .danger {
    border: 1px solid @danger-red;
    color: @danger-red;
  }
  .danger-fill {
    background: @danger-red;
    color: #fff;
  }
  .warning {
    border: 1px solid @warning-orange;
    color: @warning-orange;
  }
  .warning-fill {
    background: @warning-orange;
    color: #fff;
  }
  .round {
    border-radius: 1.25rem;
  }
  .big {
    font-size: .85rem;
    height: 2.4rem;
    line-height: 2rem;
  }
</style>
