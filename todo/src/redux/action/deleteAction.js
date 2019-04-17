
export const del = (e,value) => ({
    type: "DEL",
    id: e.target.dataset.id,
    value: value,
})
