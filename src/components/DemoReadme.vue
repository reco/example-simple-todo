<template>
  <!-- Example: Simple To-Do App -->
  <ul>
    <li v-for="task in tasks.items" :key="task.$key">
      <input type="checkbox" @input="onCheckTask( task )">
      {{task.title}}
      <a href="#" @click.prevent="onDeleteTask( task )">del</a>
    </li>
    <input v-model="title" />
    <button @click="onAddTask">add</button>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    }
  },
  computed: {
    tasks() {
      // TODO: This will throw an error
      return this.$models.task.subscribeList();
    }
  },
  methods: {
    onCheckTask( task ) {
      task = task.clone()
      task.isDone = !task.isDone;
      task.write();
      // or: this.$models.task.update( task.$id, { isDone: !task.isDone } )
    },
    onAddTask() {
      this.$models.task.add({
        title: this.title
      });
    },
    onDeleteTask( task ) {
      task.remove();
      // or: this.$models.task.remove( task.$id );
    }
  }
}
</script>
