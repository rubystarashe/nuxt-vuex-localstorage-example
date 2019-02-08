export const state = () => ({
  my_custom_value: 0
})

export const mutations = {
  increase: state => state.my_custom_value++
}
