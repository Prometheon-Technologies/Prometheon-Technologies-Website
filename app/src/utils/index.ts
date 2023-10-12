type EnumObject = { [key: string]: number | string }
type EnumObjectEnum<E extends EnumObject> = E extends { [key: string]: infer ET | string }
    ? ET
    : never

export function getEnumValues<E extends EnumObject>(enumObject: E): EnumObjectEnum<E>[] {
    return Object.keys(enumObject)
        .filter((key) => Number.isNaN(Number(key)))
        .map((key) => enumObject[key] as EnumObjectEnum<E>)
}

export function getEnumKeys<E extends EnumObject>(enumObject: E): keyof E[] {
    const keys = Object.keys(enumObject)
        .filter((key) => Number.isNaN(Number(key)))
        .map((key) => key as keyof E)

    return keys as unknown as keyof E[]
}
