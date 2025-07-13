<script setup lang="ts">
interface ButtonProps {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info" | "outline";
  startIcon?: string;
  endIcon?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "md",
  variant: "primary",
  className: "",
  disabled: false,
});

const sizeClasses = {
  xs: "p-2 text-xs",
  sm: "p-3 text-sm",
  md: "p-4 text-md",
  lg: "p-5 text-xl",
};

const variantClasses = {
  primary: "border-blue-500 bg-blue-500/50 shadow-sm hover:bg-blue-400/50 disabled:bg-blue-300",
  secondary: "border-gray-500 bg-gray-500/50 shadow-sm hover:bg-gray-400/50 disabled:bg-gray-300",
  success: "border-green-500 bg-green-500/50 shadow-sm hover:bg-green-400/50 disabled:bg-green-300",
  warning:
    "border-yellow-500 bg-yellow-500/50 shadow-sm hover:bg-yellow-400/50 disabled:bg-yellow-300",
  error: "border-red-500 bg-red-500/50 shadow-sm hover:bg-red-400/50 disabled:bg-red-300",
  info: "border-sky-500 bg-sky-500/50 shadow-sm hover:bg-sky-400/50 disabled:bg-sky-300",
  outline:
    "border-white/30 hover:bg-white/30 disabled:bg-sky-300 dark:border-black/30 dark:hover:bg-black/20",
};

const onClick = () => {
  if (!props.disabled && props.onClick) {
    props.onClick();
  }
};
</script>

<template>
  <button
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-lg border-2 font-medium text-gray-700 shadow-md backdrop-blur-3xl transition dark:text-gray-200',
      sizeClasses[size],
      variantClasses[variant],
      className,
      { 'cursor-not-allowed opacity-50': disabled },
    ]"
    @click="onClick"
    :disabled="disabled"
  >
    <span v-if="startIcon" class="flex items-center">
      <i class="bx" :class="startIcon"></i>
    </span>
    <slot></slot>
    <span v-if="endIcon" class="flex items-center">
      <i class="bx" :class="endIcon"></i>
    </span>
  </button>
</template>
