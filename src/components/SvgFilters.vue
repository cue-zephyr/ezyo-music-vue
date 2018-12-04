<template>
    <div id="svg-filters">
        <svg height="0" width="0">
            <filter id="white-glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
            <feFlood result="flood" flood-color="#daafff" flood-opacity="1"></feFlood>
            <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
            <feMorphology in="mask" result="dilated" operator="dilate" radius="2"></feMorphology>
            <feGaussianBlur in="dilated" result="blurred" stdDeviation="5"></feGaussianBlur>
            <feMerge>
            <feMergeNode in="blurred"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
            </filter>
        </svg>
    </div>
</template>

<script>
export default {
  name: 'SvgFilters'
}
</script>
