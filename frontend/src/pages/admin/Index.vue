<template>
  <div class="admin-dashboard">
    <h2>Bem-vindo ao painel de administração.</h2>
    <n-config-provider :theme-overrides="themeOverrides">
      <div class="form-section">
        <template>
          <n-space vertical>
            <n-form>
              <n-form-item label="Adicione um título">
                <n-input 
                  type="text"
                  size="medium"
                  placeholder="Título"
                />
              </n-form-item>
              <n-form-item label="Adicione o conteúdo">
                <n-input
                  size="medium"
                  type="textarea"
                  placeholder="Contéudo"
                />
              </n-form-item>
              <n-form-item>
                <n-upload
                  multiple
                  directory-dnd
                  action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                  :max="5"
                >
                  <n-upload-dragger>
                    <div style="margin-bottom: 12px">
                      <n-icon size="48" :depth="3">
                        <ArchiveIcon />
                      </n-icon>
                    </div>
                    <n-text style="font-size: 16px">
                      Click or drag a file to this area to upload
                    </n-text>
                    <n-p depth="3" style="margin: 8px 0 0 0">
                      Strictly prohibit from uploading sensitive information. For example,
                      your bank card PIN or your credit card expiry date.
                    </n-p>
                  </n-upload-dragger>
                </n-upload>
              </n-form-item>
              <div style="display: flex;">
                <n-button round type="primary" @click="handleSave">
                  Validate
                </n-button>
              </div>
            </n-form>
          </n-space>
        </template>
      </div>
    </n-config-provider>
  </div>
</template>

<script>
import { NUpload, NButton, NSpace, NInput, NForm, NFormItem, NConfigProvider } from 'naive-ui';

export default {
  name: 'IndexAdmin',
  components: {
    NConfigProvider,
    NUpload,
    NButton,
    NSpace,
    NInput,
    NForm,
    NFormItem
  },
  data() {
    const themeOverrides = {
      Button: {
        color: '#D96459',
        colorHover: '#D96459',
        textColorHover: '#FFF',
        borderHover: '#D96459'
      },
    }

    return {
      title: '',
      content: '',
      imageUrl: '',
      savedContent: null,
      themeOverrides
    };
  },
  methods: {
    handleSave(){
      console.log("aquiii")
    },
    onImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    saveContent() {
      this.savedContent = {
        title: this.title,
        content: this.content,
        imageUrl: this.imageUrl
      };
      this.clearForm();
    },
    clearForm() {
      this.title = '';
      this.content = '';
      this.imageUrl = '';
    }
  }
};
</script>

<style scoped>
.admin-dashboard {
  padding: 2rem;
  height: 100vh;
  width: 100vw;  
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

input[type="text"],
textarea {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  /* background-color: #D96459; */
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.preview-section {
  margin-top: 2rem;
}

img {
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
  border-radius: 0.25rem;
}
</style>
