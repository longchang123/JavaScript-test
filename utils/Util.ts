/**
 * 常用工具类函数
 */

// 定义比对函数的参数类型以及返回值类型
export type ICompareFunction<T> = (a: T, b: T) => number;

// 枚举类：定义比对返回值
export enum Compare {
    LESS_THAN = -1,
    BIGGER_THAN = 1,
    EQUALS = 0
}

// 默认校验函数: 判断参数a与参数b是否相等
export function defaultEquals(a: any,b: any) {
    return a === b;
}

// 默认的字符串转换函数: 用于将其他类型的数据转换为字符串
export function defaultToString(item: any) {
    if (item === null){
        return "null";
    } else if(item === undefined){
        return "undefined";
    } else if(typeof item === "string" ||item instanceof String){
        return `${item}`;
    }
    return item.toString();
}

// 默认的比对函数: 比对参数a和参数b的大小返回其相应的枚举值
export function defaultCompare<T>(a:T, b:T) {
    if (a === b){
        return Compare.EQUALS;
    }else if(a > b) {
        return Compare.BIGGER_THAN;
    }else {
        return Compare.LESS_THAN;
    }
}

