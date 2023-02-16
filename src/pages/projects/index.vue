<template>
 <div class="container">
    <h1>Lista Progetti</h1>

    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Immagine</th>
          <th>Name</th>
          <th>Description</th>
          <th>GitHub Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
            <td>
                {{ project.id }}
            </td>
          <td>
            <div v-if="project.cover_img">
              <img
                :src="backendUrl + '/storage/' + project.cover_img"
                alt=""
                style="width: 60px"
              />
            </div>
          </td>
          <td>
            <router-link :to="{ name: 'projects.show', params: {id: project.id} }">{{ project.name }}</router-link>
          </td>
          <td>
              {{ project.description }}
          </td>
          <td>
              {{ project.link }}
          </td>
          <!-- <td>
            <div v-for="tag in post.technologies" :key="tag.id">{{ technologies.tech_name }}</div>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  
  name: "ProjectsIndex",
  data() {
    return {
      projects: []
    };
  },
  methods: {
    fecthProjects() {
      axios.get('http://127.0.0.1:8000/api/projects').then((resp) => {
        this.projects = resp.data
        
      });
    }
  },
  mounted() {
    this.fecthProjects()
    console.log(this.fecthProjects);
  },
}
</script>
<style lang="scss">
    a {
        text-decoration: none;
    } 
</style>