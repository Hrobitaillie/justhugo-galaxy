<template>
  <svg 
    :class="classes"
    v-bind="size ? { width: size, height: size } : {}"
    fill="currentColor"
    aria-hidden="true"
  >
    <use :href="spriteUrl"></use>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // Nom de l'icône dans le sprite
  name: {
    type: String,
    required: true,
    validator: (value) => {
      return value && value.trim().length > 0;
    }
  },
  // Fichier sprite à utiliser (par défaut 'fa')
  sprite: {
    type: String,
    default: 'fa'
  },
  // Taille de l'icône
  size: {
    type: [String, Number],
    default: ''

  },
  // Classes CSS supplémentaires
  class: {
    type: [String, Array, Object],
    default: ''
  },
  // ViewBox personnalisé (optionnel)
  viewBox: {
    type: String,
    default: '0 0 24 24'
  }
})

// URL complète vers l'icône dans le sprite
const spriteUrl = computed(() => {
  // return `/assets/sprites/${props.sprite}.svg?v=${Date.now()}#${props.name}`
  return `#${props.name}`
})

// Classes CSS finales
const classes = computed(() => {
  const baseClasses = 'inline-block shrink-0'
  
  if (typeof props.class === 'string') {
    return `${baseClasses} ${props.class}`.trim()
  } else if (Array.isArray(props.class)) {
    return `${baseClasses} ${props.class.join(' ')}`.trim()
  } else if (typeof props.class === 'object') {
    const activeClasses = Object.entries(props.class)
      .filter(([, value]) => value)
      .map(([key]) => key)
      .join(' ')
    return `${baseClasses} ${activeClasses}`.trim()
  }
  
  return baseClasses
})
</script>
