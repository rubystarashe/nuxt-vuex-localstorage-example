export const state = () => ({
  my_custom_value: 33
})

export const mutations = {
  increase: state => state.my_custom_value++
}
