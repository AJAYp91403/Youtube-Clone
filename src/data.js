export const API_KEY = 'AIzaSyB-XL1V1KD_nQit7gVcbA0ATv9fkS8nYWQ'

export const value_converter = (value) =>{
    if (value>=1000000) {
        return Math.floor(value/1000000)+"M"
    }
    else if (value>=1000) {
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }
}
