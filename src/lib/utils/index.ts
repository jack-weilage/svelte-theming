export interface RecursiveObject<T> {
    [key: string]: T | RecursiveObject<T>
}

//TODO: ugly oneliner
export const flatten = (obj: RecursiveObject<string | number>, keys: string[] = []): Record<string, string> => Object.keys(obj).reduce((acc, key) => ({ ...acc, ...(String(obj[key]) === '[object Object]' ? flatten(obj[key] as RecursiveObject<string | number>, [...keys, key]) : { [[...keys, key].join('-')]: obj[key] }) }), {})

export const create_stylesheet = (theme_obj: RecursiveObject<string | number>): string => `:root {${Object.entries(flatten(theme_obj)).map(([key, value]) => `--${key}:${value};`).join('')}}`

export function hash(input: string)
{
    let hash = 5381
    let i = input.length

    while (i--) hash = (hash * 33) ^ input.charCodeAt(i)
    return (hash >>> 0).toString(36)
}