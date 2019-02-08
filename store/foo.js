export const state = () => ({
  my_custom_value: 0,
  expireTest: {
    expireCount: 0,
    expire: 2
  }
})

export const mutations = {
  increase: state => state.my_custom_value++,
  expirecount: state => state.expireTest.expireCount++
}
