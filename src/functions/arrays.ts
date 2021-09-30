export function randomArrayNumber(elements: any[]): any[] {
    return elements
        .map(value => ({value, ramdonNumber: Math.random()}))
        .sort((object1, object2) => object1.ramdonNumber - object2.ramdonNumber)
        .map(object => object.value)
}
