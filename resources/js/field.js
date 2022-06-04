import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-qr-code', IndexField)
  app.component('detail-qr-code', DetailField)
  app.component('form-qr-code', FormField)
})
