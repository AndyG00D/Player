

const passwordValidate = (value) => {
    if(value) return value.length>5 ? 'toLong' : undefined;}

export {passwordValidate}