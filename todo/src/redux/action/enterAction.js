export const change = (e) => ({
    type: "TYPING",
    value: e.target.value,
})

export const isactive = ( active,userData) => ({
    type: "CREATE",
    data:   userData,
    isActive: active,
 });
 export const edit = (e, arr)=>({
    type: "EDIT",
    array: arr,
    evt: e.target.dataset.id,
})
 export const name = (e) => ({
    type: "NAME",
    text: e.target.value,
});
 export const namelast = (e) => ({
    type: "NAMELAST",
    text: e.target.value,
})
 export const phone = (e) => ({
    type: "PHONE",
    text: e.target.value,
})
 export const email = (e) => ({
    type: "EMAIL",
    text: e.target.value,
})
 export const bithday = (e) => ({
    type: "BITHDAY",
    text: e.target.value,
})



