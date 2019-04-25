<template>
<div>
    <ChildA></ChildA>   
    <ChildB></ChildB>    
</div>    
</template>

<script>
import ChildA from './ChildA.vue';
import ChildB from './ChildB.vue';


export default {
    name: 'parent',
    components: { ChildA, ChildB }
}
</script>

