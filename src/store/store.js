import { reactive } from 'vue'

export const store = reactive({
  name: '',
  date: '',
  timeFrom: '',
  timeTo: '',
  data: [],
  items: new vis.DataSet({}),
  timeline: null,
  getData() {
    return this.data
  },
  setItems(newItem) {
    this.items.add(newItem)
  },
  setData(newData) {
    this.data.push(newData)
  },
  setTimelineItems() {
    this.timeline.setItems(this.items);
  },
  removeItems(item, callback = false){
    if(!callback) {
      this.data = this.data.filter(dt => dt.id !== item.id)
      this.items.remove(item.id)
      this.timeline.setItems(this.items)
    } else {
      this.data = this.data.filter(dt => dt.id !== item.id)
      this.items.remove(item.id)
      callback(item)
    }
  }
})