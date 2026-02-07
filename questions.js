const QUESTIONS_DATA = {
    "tasks": [
        {
            "id": 1,
            "title": "Сумма двух чисел",
            "difficulty": "easy",
            "description": "Напишите функцию sum, которая принимает два числа и возвращает их сумму.",
            "initialCode": "function sum(a, b) {\n // Напишите решение здесь\n \n}",
            "solution": "function sum(a, b) {\n return a + b;\n}",
            "hints": [
                "Функция должна принимать два параметра",
                "Используйте оператор + для сложения",
                "Не забудьте ключевое слово return"
            ],
            "tests": [
                { "code": "sum(2, 3)", "expected": 5 },
                { "code": "sum(-1, 1)", "expected": 0 },
                { "code": "sum(0, 0)", "expected": 0 }
            ],
            "chapter": "Часть 1: Фундамент"
        },
        {
            "id": 2,
            "title": "Разница между var, let и const",
            "difficulty": "easy",
            "description": "Объявите три переменные:\n1. var с именем globalVar и значением 'глобальная'\n2. let с именем mutableVar и начальным значением 'изменяемая', затем измените её на 'измененная'\n3. const с именем constantVar и значением 'константа'\n\nВерните массив [globalVar, mutableVar, constantVar]",
            "initialCode": "function declareVariables() {\n // Объявите переменные здесь\n \n return [globalVar, mutableVar, constantVar];\n}",
            "solution": "function declareVariables() {\n var globalVar = 'глобальная';\n let mutableVar = 'изменяемая';\n const constantVar = 'константа';\n \n mutableVar = 'измененная';\n // constantVar = 'новая' // Error\n \n return [globalVar, mutableVar, constantVar];\n}",
            "hints": [
                "var имеет функциональную область видимости",
                "let можно переприсвоить, const - нет",
                "const требует инициализации при объявлении"
            ],
            "tests": [
                { "code": "declareVariables()", "expected": ['глобальная', 'измененная', 'константа'] }
            ],
            "chapter": "Часть 1: Фундамент"
        },
        {
            "id": 3,
            "title": "Типы данных",
            "difficulty": "easy",
            "description": "Создайте переменные разных типов данных и верните их типы в массиве.",
            "initialCode": "function checkTypes() {\n // Создайте переменные разных типов\n \n return types;\n}",
            "solution": "function checkTypes() {\n const str = 'строка';\n const num = 42;\n const bool = true;\n const undef = undefined;\n const nul = null;\n const sym = Symbol('id');\n const big = 123n;\n const obj = {};\n const arr = [];\n const func = function() {};\n \n const types = [\n typeof str, typeof num, typeof bool, typeof undef,\n typeof nul, typeof sym, typeof big, typeof obj,\n typeof arr, typeof func\n ];\n \n return types;\n}",
            "hints": [
                "Используйте typeof для определения типа",
                "Обратите внимание на typeof null",
                "Массивы и функции - тоже объекты"
            ],
            "tests": [
                { "code": "checkTypes()", "expected": ['string', 'number', 'boolean', 'undefined', 'object', 'symbol', 'bigint', 'object', 'object', 'function'] }
            ],
            "chapter": "Часть 1: Фундамент"
        },
        {
            "id": 4,
            "title": "Преобразование типов",
            "difficulty": "medium",
            "description": "Напишите функцию convertTypes, которая преобразует строку в число, число в строку, булево в число.",
            "initialCode": "function convertTypes() {\n const strNum = '123';\n const num = 456;\n const bool = true;\n \n // Преобразуйте типы\n \n return [numFromStr, strFromNum, numFromBool];\n}",
            "solution": "function convertTypes() {\n const strNum = '123';\n const num = 456;\n const bool = true;\n \n // Преобразуйте типы\n const numFromStr = Number(strNum);\n const strFromNum = String(num);\n const numFromBool = Number(bool);\n \n return [numFromStr, strFromNum, numFromBool];\n}",
            "hints": [
                "Используйте Number() для преобразования в число",
                "Используйте String() для преобразования в строку",
                "Boolean(true) равно 1, Boolean(false) равно 0"
            ],
            "tests": [
                { "code": "convertTypes()", "expected": [123, '456', 1] }
            ],
            "chapter": "Часть 1: Фундамент"
        },
        {
            "id": 5,
            "title": "Точность чисел",
            "difficulty": "medium",
            "description": "Напишите функцию fixPrecision, которая решает проблему точности 0.1 + 0.2",
            "initialCode": "function fixPrecision() {\n const a = 0.1;\n const b = 0.2;\n // Решите проблему точности\n \n return result;\n}",
            "solution": "function fixPrecision() {\n const a = 0.1;\n const b = 0.2;\n // Решение проблемы точности\n const result = (a * 10 + b * 10) / 10;\n // Или: const result = parseFloat((a + b).toFixed(1));\n \n return result;\n}",
            "hints": [
                "Умножьте числа на 10, сложите, затем разделите на 10",
                "Можно использовать toFixed(), но вернется строка",
                "parseFloat() преобразует строку в число"
            ],
            "tests": [
                { "code": "fixPrecision()", "expected": 0.3 }
            ],
            "chapter": "Часть 1: Фундамент"
        },
        {
            "id": 6,
            "title": "Работа с BigInt",
            "difficulty": "easy",
            "description": "Выполните операции с большими числами используя BigInt",
            "initialCode": "function bigIntOperations() {\n const huge = 9007199254740991n;\n // Выполните +1 и *2\n \n return [incremented, doubled];\n}",
            "solution": "function bigIntOperations() {\n const huge = 9007199254740991n;\n // Выполните +1 и *2\n const incremented = huge + 1n;\n const doubled = huge * 2n;\n \n return [incremented, doubled];\n}",
            "hints": [
                "Используйте суффикс n для BigInt",
                "Нельзя смешивать BigInt с обычными числами",
                "Все операции должны быть с BigInt"
            ],
            "tests": [
                { "code": "bigIntOperations()", "expected": [9007199254740992n, 18014398509481982n] }
            ],
            "chapter": "Часть 1: Фундамент"
        },
        {
            "id": 7,
            "title": "Строковые операции",
            "difficulty": "easy",
            "description": "Выполните различные операции со строками: интерполяцию, методы",
            "initialCode": "function stringOperations(name, age) {\n // Используйте шаблонные строки\n // Используйте методы строк\n \n return [greeting, upperName, includesTest];\n}",
            "solution": "function stringOperations(name, age) {\n // Шаблонные строки\n const greeting = `Привет, ${name}! Тебе ${age} лет.`;\n // Методы строк\n const upperName = name.toUpperCase();\n const includesTest = greeting.includes('Привет');\n \n return [greeting, upperName, includesTest];\n}",
            "hints": [
                "Используйте обратные кавычки для шаблонных строк",
                "toUpperCase() преобразует в верхний регистр",
                "includes() проверяет наличие подстроки"
            ],
            "tests": [
                { "code": "stringOperations('Иван', 25)", "expected": ['Привет, Иван! Тебе 25 лет.', 'ИВАН', true] }
            ],
            "chapter": "Часть 1: Фундамент"
        },
        {
            "id": 8,
            "title": "Строгое сравнение",
            "difficulty": "easy",
            "description": "Продемонстрируйте разницу между == и ===",
            "initialCode": "function strictComparison() {\n const a = 5;\n const b = '5';\n const c = 5;\n \n // Сравните значения\n \n return [looseEq, strictEq, strictEq2];\n}",
            "solution": "function strictComparison() {\n const a = 5;\n const b = '5';\n const c = 5;\n \n // Сравните значения\n const looseEq = a == b; // true\n const strictEq = a === b; // false\n const strictEq2 = a === c; // true\n \n return [looseEq, strictEq, strictEq2];\n}",
            "hints": [
                "== выполняет приведение типов",
                "=== проверяет и значение, и тип",
                "Всегда используйте === если не требуется приведение"
            ],
            "tests": [
                { "code": "strictComparison()", "expected": [true, false, true] }
            ],
            "chapter": "Часть 1: Фундамент"
        },
        {
            "id": 9,
            "title": "Логические операторы",
            "difficulty": "medium",
            "description": "Используйте логические операторы для обработки значений",
            "initialCode": "function logicalOperators(name, age) {\n // Установите значение по умолчанию для name\n // Проверьте, что age между 18 и 65\n \n return [defaultName, isWorkingAge];\n}",
            "solution": "function logicalOperators(name, age) {\n // Установите значение по умолчанию для name\n const defaultName = name || 'Гость';\n // Проверьте, что age между 18 и 65\n const isWorkingAge = age >= 18 && age <= 65;\n \n return [defaultName, isWorkingAge];\n}",
            "hints": [
                "|| возвращает первое truthy значение",
                "&& возвращает первое falsy или последнее truthy",
                "Используйте >= и <= для диапазона"
            ],
            "tests": [
                { "code": "logicalOperators('', 25)", "expected": ['Гость', true] },
                { "code": "logicalOperators('Анна', 70)", "expected": ['Анна', false] }
            ],
            "chapter": "Часть 1: Фундамент"
        },
        {
            "id": 10,
            "title": "Тернарный оператор",
            "difficulty": "easy",
            "description": "Используйте тернарный оператор для проверки возраста",
            "initialCode": "function ternaryOperator(age) {\n // Используйте тернарный оператор\n \n return status;\n}",
            "solution": "function ternaryOperator(age) {\n // Используйте тернарный оператор\n const status = age >= 18 ? 'совершеннолетний' : 'несовершеннолетний';\n \n return status;\n}",
            "hints": [
                "Синтаксис: условие ? значение1 : значение2",
                "Если условие true - возвращает значение1",
                "Если условие false - возвращает значение2"
            ],
            "tests": [
                { "code": "ternaryOperator(20)", "expected": 'совершеннолетний' },
                { "code": "ternaryOperator(16)", "expected": 'несовершеннолетний' }
            ],
            "chapter": "Часть 1: Фундамент"
        },

        {
            "id": 11,
            "title": "Простое условие if-else",
            "difficulty": "easy",
            "description": "Напишите функцию checkNumber, которая возвращает 'положительное', 'отрицательное' или 'ноль'",
            "initialCode": "function checkNumber(num) {\n // Используйте if-else\n \n}",
            "solution": "function checkNumber(num) {\n if (num > 0) {\n return 'положительное';\n } else if (num < 0) {\n return 'отрицательное';\n } else {\n return 'ноль';\n }\n}",
            "hints": [
                "Сначала проверьте > 0",
                "Затем проверьте < 0",
                "В остальных случаях это 0"
            ],
            "tests": [
                { "code": "checkNumber(5)", "expected": 'положительное' },
                { "code": "checkNumber(-3)", "expected": 'отрицательное' },
                { "code": "checkNumber(0)", "expected": 'ноль' }
            ],
            "chapter": "Часть 2: Управление потоком выполнения"
        },
        {
            "id": 12,
            "title": "Switch для дней недели",
            "difficulty": "easy",
            "description": "Используйте switch для возврата типа дня (рабочий/выходной)",
            "initialCode": "function dayType(day) {\n // Используйте switch\n \n}",
            "solution": "function dayType(day) {\n switch(day.toLowerCase()) {\n case 'понедельник':\n case 'вторник':\n case 'среда':\n case 'четверг':\n case 'пятница':\n return 'рабочий';\n case 'суббота':\n case 'воскресенье':\n return 'выходной';\n default:\n return 'неизвестный день';\n }\n}",
            "hints": [
                "Используйте toLowerCase() для единообразия",
                "Группируйте случаи без break между ними",
                "Не забудьте default"
            ],
            "tests": [
                { "code": "dayType('понедельник')", "expected": 'рабочий' },
                { "code": "dayType('СУББОТА')", "expected": 'выходной' },
                { "code": "dayType('не день')", "expected": 'неизвестный день' }
            ],
            "chapter": "Часть 2: Управление потоком выполнения"
        },
        {
            "id": 13,
            "title": "Цикл for - сумма чисел",
            "difficulty": "easy",
            "description": "Используйте цикл for для вычисления суммы чисел от 1 до n",
            "initialCode": "function sumToN(n) {\n let sum = 0;\n // Используйте цикл for\n \n return sum;\n}",
            "solution": "function sumToN(n) {\n let sum = 0;\n for(let i = 1; i <= n; i++) {\n sum += i;\n }\n return sum;\n}",
            "hints": [
                "Инициализируйте i = 1",
                "Условие: i <= n",
                "Увеличивайте i на каждой итерации"
            ],
            "tests": [
                { "code": "sumToN(5)", "expected": 15 },
                { "code": "sumToN(10)", "expected": 55 },
                { "code": "sumToN(1)", "expected": 1 }
            ],
            "chapter": "Часть 2: Управление потоком выполнения"
        },
        {
            "id": 14,
            "title": "Цикл while - факториал",
            "difficulty": "medium",
            "description": "Вычислите факториал числа используя цикл while",
            "initialCode": "function factorialWhile(n) {\n if (n < 0) return null;\n let result = 1;\n // Используйте цикл while\n \n return result;\n}",
            "solution": "function factorialWhile(n) {\n if (n < 0) return null;\n let result = 1;\n let i = 1;\n \n while(i <= n) {\n result *= i;\n i++;\n }\n \n return result;\n}",
            "hints": [
                "Инициализируйте счетчик i = 1",
                "Умножайте result на i",
                "Увеличивайте i пока i <= n"
            ],
            "tests": [
                { "code": "factorialWhile(5)", "expected": 120 },
                { "code": "factorialWhile(0)", "expected": 1 },
                { "code": "factorialWhile(-1)", "expected": null }
            ],
            "chapter": "Часть 2: Управление потоком выполнения"
        },
        {
            "id": 15,
            "title": "Цикл do-while",
            "difficulty": "medium",
            "description": "Генерируйте случайные числа пока не получите число > 0.5",
            "initialCode": "function generateUntilHalf() {\n let randomNum;\n let attempts = 0;\n // Используйте do-while\n \n return attempts;\n}",
            "solution": "function generateUntilHalf() {\n let randomNum;\n let attempts = 0;\n \n do {\n randomNum = Math.random(); // 0-1\n attempts++;\n } while(randomNum <= 0.5);\n \n return attempts;\n}",
            "hints": [
                "Math.random() возвращает число от 0 до 1",
                "do-while выполнится минимум один раз",
                "Увеличивайте attempts на каждой итерации"
            ],
            "tests": [
                { "code": "typeof generateUntilHalf()", "expected": 'number' }
            ],
            "chapter": "Часть 2: Управление потоком выполнения"
        },
        {
            "id": 16,
            "title": "Цикл for...of для массива",
            "difficulty": "easy",
            "description": "Используйте for...of для поиска максимального числа в массиве",
            "initialCode": "function findMaxForOf(arr) {\n if (arr.length === 0) return null;\n let max = arr[0];\n // Используйте for...of\n \n return max;\n}",
            "solution": "function findMaxForOf(arr) {\n if (arr.length === 0) return null;\n let max = arr[0];\n \n for(const num of arr) {\n if (num > max) {\n max = num;\n }\n }\n \n return max;\n}",
            "hints": [
                "for...of перебирает значения массива",
                "Сравнивайте текущее значение с max",
                "Обновляйте max если нашли больше"
            ],
            "tests": [
                { "code": "findMaxForOf([1, 5, 3, 9, 2])", "expected": 9 },
                { "code": "findMaxForOf([-10, -5, -20])", "expected": -5 },
                { "code": "findMaxForOf([])", "expected": null }
            ],
            "chapter": "Часть 2: Управление потоком выполнения"
        },
        {
            "id": 17,
            "title": "Цикл for...in для объекта",
            "difficulty": "medium",
            "description": "Используйте for...in для подсчета суммы значений объекта",
            "initialCode": "function sumObjectValues(obj) {\n let sum = 0;\n // Используйте for...in\n \n return sum;\n}",
            "solution": "function sumObjectValues(obj) {\n let sum = 0;\n \n for(const key in obj) {\n if (typeof obj[key] === 'number') {\n sum += obj[key];\n }\n }\n \n return sum;\n}",
            "hints": [
                "for...in перебирает ключи объекта",
                "Проверяйте тип значения перед сложением",
                "Используйте obj[key] для доступа к значению"
            ],
            "tests": [
                { "code": "sumObjectValues({a: 1, b: 2, c: 3})", "expected": 6 },
                { "code": "sumObjectValues({x: 10, y: 'текст', z: 5})", "expected": 15 }
            ],
            "chapter": "Часть 2: Управление потоком выполнения"
        },
        {
            "id": 18,
            "title": "Break и continue в цикле",
            "difficulty": "medium",
            "description": "Найдите первое четное число в массиве используя break",
            "initialCode": "function findFirstEven(arr) {\n // Используйте break\n \n}",
            "solution": "function findFirstEven(arr) {\n for(let i = 0; i < arr.length; i++) {\n if (arr[i] % 2 === 0) {\n return arr[i];\n // или break и вернуть после цикла\n }\n }\n return null;\n}",
            "hints": [
                "Проверяйте остаток от деления на 2",
                "Используйте return для немедленного выхода",
                "Или break чтобы прервать цикл"
            ],
            "tests": [
                { "code": "findFirstEven([1, 3, 5, 2, 7, 4])", "expected": 2 },
                { "code": "findFirstEven([1, 3, 5])", "expected": null }
            ],
            "chapter": "Часть 2: Управление потоком выполнения"
        },
        {
            "id": 19,
            "title": "Вложенные циклы",
            "difficulty": "medium",
            "description": "Создайте матрицу умножения (таблицу Пифагора)",
            "initialCode": "function multiplicationTable(n) {\n const table = [];\n // Используйте вложенные циклы\n \n return table;\n}",
            "solution": "function multiplicationTable(n) {\n const table = [];\n \n for(let i = 1; i <= n; i++) {\n const row = [];\n for(let j = 1; j <= n; j++) {\n row.push(i * j);\n }\n table.push(row);\n }\n \n return table;\n}",
            "hints": [
                "Внешний цикл для строк",
                "Внутренний цикл для столбцов",
                "Умножайте номер строки на номер столбца"
            ],
            "tests": [
                { "code": "multiplicationTable(3)", "expected": [[1, 2, 3], [2, 4, 6], [3, 6, 9]] }
            ],
            "chapter": "Часть 2: Управление потоком выполнения"
        },
        {
            "id": 20,
            "title": "Ранний возврат (early return)",
            "difficulty": "medium",
            "description": "Используйте early return для проверки пароля",
            "initialCode": "function checkPassword(password) {\n // Используйте early return\n \n}",
            "solution": "function checkPassword(password) {\n // Early returns\n if (!password) return 'Пароль не может быть пустым';\n if (password.length < 8) return 'Пароль слишком короткий';\n if (!/[A-Z]/.test(password)) return 'Нужна хотя бы одна заглавная буква';\n if (!/[0-9]/.test(password)) return 'Нужна хотя бы одна цифра';\n \n return 'Пароль надежный';\n}",
            "hints": [
                "Сначала проверьте пустоту",
                "Затем проверьте длину",
                "Используйте регулярные выражения для проверки символов"
            ],
            "tests": [
                { "code": "checkPassword('')", "expected": 'Пароль не может быть пустым' },
                { "code": "checkPassword('Short1')", "expected": 'Пароль слишком короткий' },
                { "code": "checkPassword('nopass123')", "expected": 'Нужна хотя бы одна заглавная буква' },
                { "code": "checkPassword('GoodPass1')", "expected": 'Пароль надежный' }
            ],
            "chapter": "Часть 2: Управление потоком выполнения"
        },

        {
            "id": 21,
            "title": "Основы массивов",
            "difficulty": "easy",
            "description": "Создайте массив и выполните базовые операции: push, pop, shift, unshift",
            "initialCode": "function arrayBasics() {\n const arr = [1, 2, 3];\n // Выполните операции\n \n return arr;\n}",
            "solution": "function arrayBasics() {\n const arr = [1, 2, 3];\n \n // Добавить в конец\n arr.push(4);\n // Удалить с конца\n arr.pop();\n // Добавить в начало\n arr.unshift(0);\n // Удалить с начала\n arr.shift();\n \n return arr;\n}",
            "hints": [
                "push добавляет в конец",
                "pop удаляет с конца",
                "unshift добавляет в начало",
                "shift удаляет с начала"
            ],
            "tests": [
                { "code": "arrayBasics()", "expected": [1, 2, 3] }
            ],
            "chapter": "Часть 3: Структуры данных"
        },
        {
            "id": 22,
            "title": "Метод map",
            "difficulty": "easy",
            "description": "Используйте map для преобразования массива чисел в их квадраты",
            "initialCode": "function squareNumbers(arr) {\n // Используйте map\n \n}",
            "solution": "function squareNumbers(arr) {\n return arr.map(num => num * num);\n}",
            "hints": [
                "map создает новый массив",
                "Используйте стрелочную функцию",
                "Умножьте число на само себя"
            ],
            "tests": [
                { "code": "squareNumbers([1, 2, 3, 4])", "expected": [1, 4, 9, 16] },
                { "code": "squareNumbers([-1, 0, 5])", "expected": [1, 0, 25] }
            ],
            "chapter": "Часть 3: Структуры данных"
        },
        {
            "id": 23,
            "title": "Метод filter",
            "difficulty": "easy",
            "description": "Используйте filter для отбора чисел больше 10",
            "initialCode": "function filterGreaterThan10(arr) {\n // Используйте filter\n \n}",
            "solution": "function filterGreaterThan10(arr) {\n return arr.filter(num => num > 10);\n}",
            "hints": [
                "filter возвращает новый массив",
                "Используйте стрелочную функцию",
                "Условие: num > 10"
            ],
            "tests": [
                { "code": "filterGreaterThan10([5, 12, 8, 15, 3])", "expected": [12, 15] },
                { "code": "filterGreaterThan10([1, 2, 3])", "expected": [] }
            ],
            "chapter": "Часть 3: Структуры данных"
        },
        {
            "id": 24,
            "title": "Метод reduce",
            "difficulty": "medium",
            "description": "Используйте reduce для вычисления среднего значения",
            "initialCode": "function calculateAverage(arr) {\n // Используйте reduce\n \n}",
            "solution": "function calculateAverage(arr) {\n if (arr.length === 0) return 0;\n \n const sum = arr.reduce((total, num) => total + num, 0);\n return sum / arr.length;\n}",
            "hints": [
                "reduce аккумулирует значения",
                "Начальное значение 0",
                "Разделите сумму на длину массива"
            ],
            "tests": [
                { "code": "calculateAverage([1, 2, 3, 4, 5])", "expected": 3 },
                { "code": "calculateAverage([])", "expected": 0 }
            ],
            "chapter": "Часть 3: Структуры данных"
        },
        {
            "id": 25,
            "title": "Методы slice и splice",
            "difficulty": "medium",
            "description": "Продемонстрируйте разницу между slice и splice",
            "initialCode": "function sliceVsSplice() {\n const arr1 = [1, 2, 3, 4, 5];\n const arr2 = [1, 2, 3, 4, 5];\n \n // Используйте slice и splice\n \n return [sliceResult, spliceResult, arr1, arr2];\n}",
            "solution": "function sliceVsSplice() {\n const arr1 = [1, 2, 3, 4, 5];\n const arr2 = [1, 2, 3, 4, 5];\n \n // slice не мутирует оригинал\n const sliceResult = arr1.slice(1, 4); // [2, 3, 4]\n \n // splice мутирует оригинал\n const spliceResult = arr2.splice(1, 3); // [2, 3, 4]\n \n return [sliceResult, spliceResult, arr1, arr2];\n}",
            "hints": [
                "slice возвращает часть массива",
                "splice изменяет оригинальный массив",
                "slice(start, end), splice(start, deleteCount)"
            ],
            "tests": [
                { "code": "sliceVsSplice()", "expected": [[2, 3, 4], [2, 3, 4], [1, 2, 3, 4, 5], [1, 5]] }
            ],
            "chapter": "Часть 3: Структуры данных"
        },
        {
            "id": 26,
            "title": "Создание и доступ к объектам",
            "difficulty": "easy",
            "description": "Создайте объект пользователя и получите доступ к его свойствам",
            "initialCode": "function createUser() {\n // Создайте объект пользователя\n \n return [name, email, age];\n}",
            "solution": "function createUser() {\n // Создайте объект пользователя\n const user = {\n name: 'Иван',\n email: 'ivan@example.com',\n age: 25,\n 'phone number': '+79123456789' // свойство с пробелом\n };\n \n // Доступ к свойствам\n const name = user.name;\n const email = user['email'];\n const age = user.age;\n \n return [name, email, age];\n}",
            "hints": [
                "Используйте {} для создания объекта",
                "Доступ через точку для простых свойств",
                "Доступ через [] для свойств с пробелами"
            ],
            "tests": [
                { "code": "createUser()", "expected": ['Иван', 'ivan@example.com', 25] }
            ],
            "chapter": "Часть 3: Структуры данных"
        },
        {
            "id": 27,
            "title": "Методы объектов",
            "difficulty": "easy",
            "description": "Добавьте метод к объекту и используйте this",
            "initialCode": "function addMethodToObject() {\n const person = {\n name: 'Анна',\n age: 30,\n // Добавьте метод getInfo\n };\n \n return person.getInfo();\n}",
            "solution": "function addMethodToObject() {\n const person = {\n name: 'Анна',\n age: 30,\n // Добавьте метод getInfo\n getInfo() {\n return `Имя: ${this.name}, Возраст: ${this.age}`;\n }\n };\n \n return person.getInfo();\n}",
            "hints": [
                "Используйте сокращенный синтаксис метода",
                "this ссылается на текущий объект",
                "Используйте шаблонные строки"
            ],
            "tests": [
                { "code": "addMethodToObject()", "expected": 'Имя: Анна, Возраст: 30' }
            ],
            "chapter": "Часть 3: Структуры данных"
        },
        {
            "id": 28,
            "title": "Object.keys, values, entries",
            "difficulty": "medium",
            "description": "Используйте методы Object для работы с объектом",
            "initialCode": "function objectMethods() {\n const user = {name: 'Иван', age: 25, city: 'Москва'};\n \n // Используйте Object методы\n \n return [keys, values, entries];\n}",
            "solution": "function objectMethods() {\n const user = {name: 'Иван', age: 25, city: 'Москва'};\n \n // Используйте Object методы\n const keys = Object.keys(user);\n const values = Object.values(user);\n const entries = Object.entries(user);\n \n return [keys, values, entries];\n}",
            "hints": [
                "Object.keys возвращает ключи",
                "Object.values возвращает значения",
                "Object.entries возвращает пары [ключ, значение]"
            ],
            "tests": [
                { "code": "objectMethods()", "expected": [['name', 'age', 'city'], ['Иван', 25, 'Москва'], [['name', 'Иван'], ['age', 25], ['city', 'Москва']]] }
            ],
            "chapter": "Часть 3: Структуры данных"
        },
        {
            "id": 29,
            "title": "Глубокое копирование объектов",
            "difficulty": "hard",
            "description": "Создайте глубокую копию объекта",
            "initialCode": "function deepCopy(obj) {\n // Создайте глубокую копию\n \n}",
            "solution": "function deepCopy(obj) {\n // Для глубокой копии\n return JSON.parse(JSON.stringify(obj));\n \n // Или используйте structuredClone в современных браузерах\n // return structuredClone ? structuredClone(obj) : JSON.parse(JSON.stringify(obj));\n}",
            "hints": [
                "JSON.stringify преобразует объект в строку",
                "JSON.parse преобразует строку обратно в объект",
                "Это создает новый объект с теми же данными"
            ],
            "tests": [
                { 
                    "code": "const obj = {a: 1, b: {c: 2}}; const copy = deepCopy(obj); copy.b.c = 3; obj.b.c", 
                    "expected": 2 
                }
            ],
            "chapter": "Часть 3: Структуры данных"
        },
        {
            "id": 30,
            "title": "Деструктуризация объектов и массивов",
            "difficulty": "medium",
            "description": "Используйте деструктуризацию для извлечения значений",
            "initialCode": "function destructuring() {\n const user = {name: 'Иван', age: 25, city: 'Москва'};\n const numbers = [1, 2, 3, 4, 5];\n \n // Используйте деструктуризацию\n \n return [userName, userAge, first, second, ...rest];\n}",
            "solution": "function destructuring() {\n const user = {name: 'Иван', age: 25, city: 'Москва'};\n const numbers = [1, 2, 3, 4, 5];\n \n // Деструктуризация объекта\n const {name: userName, age: userAge} = user;\n \n // Деструктуризация массива\n const [first, second, ...rest] = numbers;\n \n return [userName, userAge, first, second, rest];\n}",
            "hints": [
                "Для объектов используйте {}",
                "Для массивов используйте []",
                "rest оператор собирает остальные элементы"
            ],
            "tests": [
                { "code": "destructuring()", "expected": ['Иван', 25, 1, 2, [3, 4, 5]] }
            ],
            "chapter": "Часть 3: Структуры данных"
        },

        {
            "id": 31,
            "title": "Function Declaration",
            "difficulty": "easy",
            "description": "Создайте функцию declaration, которая возвращает приветствие",
            "initialCode": "// Используйте function declaration\n \nfunction greet(name) {\n \n}",
            "solution": "// Function declaration\nfunction greet(name) {\n return `Привет, ${name}!`;\n}",
            "hints": [
                "Function declaration поднимается (hoisting)",
                "Можно вызывать до объявления",
                "Используйте return для возврата значения"
            ],
            "tests": [
                { "code": "greet('Иван')", "expected": 'Привет, Иван!' },
                { "code": "greet('Анна')", "expected": 'Привет, Анна!' }
            ],
            "chapter": "Часть 4: Функции"
        },
        {
            "id": 32,
            "title": "Function Expression",
            "difficulty": "easy",
            "description": "Создайте функцию expression для вычисления квадрата числа",
            "initialCode": "// Используйте function expression\n \n \nreturn square(5);",
            "solution": "// Function expression\nconst square = function(x) {\n return x * x;\n};\n\nreturn square(5);",
            "hints": [
                "Function expression присваивается переменной",
                "Нет hoisting, нельзя вызвать до объявления",
                "Используйте const для объявления"
            ],
            "tests": [
                { "code": "const square = function(x) { return x * x; }; square(5)", "expected": 25 }
            ],
            "chapter": "Часть 4: Функции"
        },
        {
            "id": 33,
            "title": "Arrow Function",
            "difficulty": "easy",
            "description": "Создайте стрелочную функцию для сложения двух чисел",
            "initialCode": "// Используйте arrow function\n \n \nreturn add(2, 3);",
            "solution": "// Arrow function\nconst add = (a, b) => a + b;\n\nreturn add(2, 3);",
            "hints": [
                "Стрелочные функции компактны",
                "Нет своего this, arguments, super",
                "Для одной строки не нужен return"
            ],
            "tests": [
                { "code": "const add = (a, b) => a + b; add(2, 3)", "expected": 5 }
            ],
            "chapter": "Часть 4: Функции"
        },
        {
            "id": 34,
            "title": "Параметры по умолчанию",
            "difficulty": "easy",
            "description": "Создайте функцию с параметрами по умолчанию",
            "initialCode": "function greetPerson(name, greeting) {\n // Установите greeting по умолчанию\n \n}",
            "solution": "function greetPerson(name, greeting = 'Привет') {\n return `${greeting}, ${name}!`;\n}",
            "hints": [
                "Параметры по умолчанию задаются через =",
                "Используются если аргумент не передан",
                "Могут быть любые выражения"
            ],
            "tests": [
                { "code": "greetPerson('Иван')", "expected": 'Привет, Иван!' },
                { "code": "greetPerson('Иван', 'Здравствуйте')", "expected": 'Здравствуйте, Иван!' }
            ],
            "chapter": "Часть 4: Функции"
        },
        {
            "id": 35,
            "title": "Rest параметры",
            "difficulty": "medium",
            "description": "Используйте rest параметры для суммирования любого количества чисел",
            "initialCode": "function sumAll(...numbers) {\n // Используйте rest параметры\n \n}",
            "solution": "function sumAll(...numbers) {\n return numbers.reduce((total, num) => total + num, 0);\n}",
            "hints": [
                "Rest параметры собирают аргументы в массив",
                "Используйте ... перед именем параметра",
                "Должен быть последним параметром"
            ],
            "tests": [
                { "code": "sumAll(1, 2, 3)", "expected": 6 },
                { "code": "sumAll(1, 2, 3, 4, 5)", "expected": 15 }
            ],
            "chapter": "Часть 4: Функции"
        },
        {
            "id": 36,
            "title": "Замыкание (Closure)",
            "difficulty": "hard",
            "description": "Создайте замыкание для счетчика",
            "initialCode": "function createCounter() {\n // Создайте замыкание\n \n}",
            "solution": "function createCounter() {\n let count = 0; // Приватная переменная в замыкании\n \n return function() {\n count++;\n return count;\n };\n}",
            "hints": [
                "Внутренняя функция запоминает окружение",
                "Переменная count сохраняется между вызовами",
                "Каждое замыкание имеет свою копию переменных"
            ],
            "tests": [
                { "code": "const counter = createCounter(); [counter(), counter(), counter()]", "expected": [1, 2, 3] }
            ],
            "chapter": "Часть 4: Функции"
        },
        {
            "id": 37,
            "title": "Рекурсия",
            "difficulty": "medium",
            "description": "Напишите рекурсивную функцию для вычисления факториала",
            "initialCode": "function factorialRecursive(n) {\n // Используйте рекурсию\n \n}",
            "solution": "function factorialRecursive(n) {\n if (n <= 1) return 1; // Базовый случай\n return n * factorialRecursive(n - 1); // Рекурсивный вызов\n}",
            "hints": [
                "Нужен базовый случай (когда остановиться)",
                "Рекурсивный вызов с уменьшением n",
                "Факториал 0 и 1 равен 1"
            ],
            "tests": [
                { "code": "factorialRecursive(5)", "expected": 120 },
                { "code": "factorialRecursive(0)", "expected": 1 }
            ],
            "chapter": "Часть 4: Функции"
        },
        {
            "id": 38,
            "title": "Каррирование (Currying)",
            "difficulty": "hard",
            "description": "Создайте каррированную функцию для умножения",
            "initialCode": "function multiply(a) {\n // Реализуйте каррирование\n \n}",
            "solution": "function multiply(a) {\n return function(b) {\n return a * b;\n };\n}",
            "hints": [
                "Каррирование преобразует функцию многих аргументов в цепочку",
                "Каждая функция принимает один аргумент",
                "Возвращает новую функцию или результат"
            ],
            "tests": [
                { "code": "multiply(2)(3)", "expected": 6 },
                { "code": "const double = multiply(2); double(5)", "expected": 10 }
            ],
            "chapter": "Часть 4: Функции"
        },
        {
            "id": 39,
            "title": "Функция высшего порядка",
            "difficulty": "medium",
            "description": "Создайте функцию, которая принимает другую функцию как аргумент",
            "initialCode": "function applyOperation(numbers, operation) {\n // operation - функция\n \n}",
            "solution": "function applyOperation(numbers, operation) {\n return numbers.map(operation);\n}",
            "hints": [
                "Функции могут принимать другие функции как аргументы",
                "Используйте переданную функцию для обработки",
                "map ожидает функцию как аргумент"
            ],
            "tests": [
                { "code": "applyOperation([1, 2, 3], x => x * 2)", "expected": [2, 4, 6] },
                { "code": "applyOperation([1, 2, 3], x => x + 1)", "expected": [2, 3, 4] }
            ],
            "chapter": "Часть 4: Функции"
        },
        {
            "id": 40,
            "title": "IIFE (Immediately Invoked Function Expression)",
            "difficulty": "medium",
            "description": "Создайте IIFE для создания приватной области видимости",
            "initialCode": "// Создайте IIFE\n \n \nreturn result;",
            "solution": "const result = (function() {\n // Приватная переменная\n const secret = 'секрет';\n \n // Публичное API\n return {\n getSecret: function() {\n return secret;\n },\n publicVar: 'публично'\n };\n})();\n\nreturn result.getSecret();",
            "hints": [
                "IIFE выполняется сразу после создания",
                "Создает приватную область видимости",
                "Может возвращать публичное API"
            ],
            "tests": [
                { "code": "const module = (function() { const secret = 'секрет'; return { getSecret: () => secret }; })(); module.getSecret()", "expected": 'секрет' }
            ],
            "chapter": "Часть 4: Функции"
        },

        {
            "id": 41,
            "title": "Поиск элементов DOM",
            "difficulty": "easy",
            "description": "Напишите функцию для поиска элементов разными способами",
            "initialCode": "function findElements() {\n // В этом задании предполагается, что HTML уже загружен\n // Используйте разные методы поиска\n \n return [byId, byClass, byTag, byQuery];\n}",
            "solution": "function findElements() {\n // Разные методы поиска\n const byId = document.getElementById('myId');\n const byClass = document.getElementsByClassName('myClass');\n const byTag = document.getElementsByTagName('div');\n const byQuery = document.querySelector('.container .item');\n \n return [byId?.id || null, byClass.length, byTag.length, byQuery?.className || null];\n}",
            "hints": [
                "getElementById ищет по id",
                "getElementsByClassName возвращает коллекцию",
                "querySelector ищет по CSS селектору"
            ],
            "tests": [
                { "code": "typeof findElements()", "expected": 'object' }
            ],
            "chapter": "Часть 5: Работа с DOM"
        },
        {
            "id": 42,
            "title": "Изменение содержимого элемента",
            "difficulty": "easy",
            "description": "Измените текст и HTML элемента",
            "initialCode": "function changeContent() {\n // Создайте элемент div\n const div = document.createElement('div');\n \n // Измените содержимое\n \n return [div.textContent, div.innerHTML];\n}",
            "solution": "function changeContent() {\n // Создайте элемент div\n const div = document.createElement('div');\n \n // Измените содержимое\n div.textContent = 'Простой текст';\n div.innerHTML = '<strong>Жирный текст</strong>';\n \n return [div.textContent, div.innerHTML];\n}",
            "hints": [
                "textContent устанавливает текст",
                "innerHTML устанавливает HTML",
                "textContent безопаснее для пользовательского ввода"
            ],
            "tests": [
                { "code": "changeContent()", "expected": ['Жирный текст', '<strong>Жирный текст</strong>'] }
            ],
            "chapter": "Часть 5: Работа с DOM"
        },
        {
            "id": 43,
            "title": "Работа с классами CSS",
            "difficulty": "easy",
            "description": "Добавьте, удалите и переключите классы элемента",
            "initialCode": "function manipulateClasses() {\n const div = document.createElement('div');\n \n // Работа с классами\n \n return div.className;\n}",
            "solution": "function manipulateClasses() {\n const div = document.createElement('div');\n \n // Работа с классами\n div.classList.add('active', 'visible');\n div.classList.remove('visible');\n div.classList.toggle('hidden');\n div.classList.toggle('hidden');\n \n return div.className;\n}",
            "hints": [
                "classList.add добавляет классы",
                "classList.remove удаляет классы",
                "classList.toggle добавляет/удаляет класс"
            ],
            "tests": [
                { "code": "manipulateClasses()", "expected": 'active' }
            ],
            "chapter": "Часть 5: Работа с DOM"
        },
        {
            "id": 44,
            "title": "Создание и добавление элементов",
            "difficulty": "medium",
            "description": "Создайте элементы и добавьте их в DOM",
            "initialCode": "function createAndAppend() {\n const container = document.createElement('div');\n \n // Создайте и добавьте элементы\n \n return container.children.length;\n}",
            "solution": "function createAndAppend() {\n const container = document.createElement('div');\n \n // Создайте и добавьте элементы\n const p1 = document.createElement('p');\n p1.textContent = 'Первый параграф';\n \n const p2 = document.createElement('p');\n p2.textContent = 'Второй параграф';\n \n container.appendChild(p1);\n container.appendChild(p2);\n \n return container.children.length;\n}",
            "hints": [
                "createElement создает новый элемент",
                "appendChild добавляет элемент в конец",
                "Можно создать DocumentFragment для оптимизации"
            ],
            "tests": [
                { "code": "createAndAppend()", "expected": 2 }
            ],
            "chapter": "Часть 5: Работа с DOM"
        },
        {
            "id": 45,
            "title": "Обработчики событий",
            "difficulty": "medium",
            "description": "Добавьте и удалите обработчик события",
            "initialCode": "function handleEvents() {\n const button = document.createElement('button');\n let clickCount = 0;\n \n // Добавьте обработчик\n \n // Имитируйте клик\n button.click();\n button.click();\n \n // Удалите обработчик\n \n button.click();\n \n return clickCount;\n}",
            "solution": "function handleEvents() {\n const button = document.createElement('button');\n let clickCount = 0;\n \n // Функция обработчика\n function handleClick() {\n clickCount++;\n }\n \n // Добавьте обработчик\n button.addEventListener('click', handleClick);\n \n // Имитируйте клик\n button.click();\n button.click();\n \n // Удалите обработчик\n button.removeEventListener('click', handleClick);\n \n button.click();\n \n return clickCount;\n}",
            "hints": [
                "addEventListener добавляет обработчик",
                "removeEventListener удаляет обработчик",
                "Нужна та же функция для удаления"
            ],
            "tests": [
                { "code": "handleEvents()", "expected": 2 }
            ],
            "chapter": "Часть 5: Работа с DOM"
        },
        {
            "id": 46,
            "title": "Делегирование событий",
            "difficulty": "hard",
            "description": "Используйте делегирование событий для обработки кликов",
            "initialCode": "function eventDelegation() {\n const ul = document.createElement('ul');\n let clickedItem = '';\n \n // Создайте элементы списка\n for(let i = 1; i <= 3; i++) {\n const li = document.createElement('li');\n li.textContent = `Элемент ${i}`;\n li.dataset.id = i;\n ul.appendChild(li);\n }\n \n // Делегирование событий\n \n // Имитируйте клик по второму элементу\n ul.children[1].click();\n \n return clickedItem;\n}",
            "solution": "function eventDelegation() {\n const ul = document.createElement('ul');\n let clickedItem = '';\n \n // Создайте элементы списка\n for(let i = 1; i <= 3; i++) {\n const li = document.createElement('li');\n li.textContent = `Элемент ${i}`;\n li.dataset.id = i;\n ul.appendChild(li);\n }\n \n // Делегирование событий\n ul.addEventListener('click', function(event) {\n if (event.target.tagName === 'LI') {\n clickedItem = event.target.dataset.id;\n }\n });\n \n // Имитируйте клик по второму элементу\n ul.children[1].click();\n \n return clickedItem;\n}",
            "hints": [
                "Вешайте обработчик на родительский элемент",
                "Используйте event.target для определения элемента",
                "Проверяйте tagName или класс"
            ],
            "tests": [
                { "code": "eventDelegation()", "expected": '2' }
            ],
            "chapter": "Часть 5: Работа с DOM"
        },
        {
            "id": 47,
            "title": "Формы и валидация",
            "difficulty": "medium",
            "description": "Создайте форму и добавьте валидацию",
            "initialCode": "function formValidation() {\n const form = document.createElement('form');\n const input = document.createElement('input');\n input.type = 'email';\n form.appendChild(input);\n \n // Добавьте валидацию\n \n return isValid;\n}",
            "solution": "function formValidation() {\n const form = document.createElement('form');\n const input = document.createElement('input');\n input.type = 'email';\n form.appendChild(input);\n \n let isValid = false;\n \n // Добавьте валидацию\n form.addEventListener('submit', function(event) {\n event.preventDefault();\n \n if (input.value.includes('@')) {\n isValid = true;\n } else {\n isValid = false;\n }\n });\n \n // Имитация отправки\n input.value = 'test@example.com';\n form.dispatchEvent(new Event('submit'));\n \n return isValid;\n}",
            "hints": [
                "preventDefault отменяет стандартное поведение",
                "Проверяйте значение поля",
                "dispatchEvent имитирует событие"
            ],
            "tests": [
                { "code": "formValidation()", "expected": true }
            ],
            "chapter": "Часть 5: Работа с DOM"
        },
        {
            "id": 48,
            "title": "Анимация с CSS классами",
            "difficulty": "medium",
            "description": "Добавьте и удалите класс для анимации",
            "initialCode": "function cssAnimation() {\n const div = document.createElement('div');\n div.style.transition = 'opacity 0.5s';\n \n // Управление анимацией\n \n return [before, after];\n}",
            "solution": "function cssAnimation() {\n const div = document.createElement('div');\n div.style.transition = 'opacity 0.5s';\n \n // Начальное состояние\n div.style.opacity = '1';\n const before = div.style.opacity;\n \n // Добавьте класс для анимации\n div.classList.add('fade-out');\n div.style.opacity = '0';\n \n const after = div.style.opacity;\n \n return [before, after];\n}",
            "hints": [
                "Используйте CSS transition для анимации",
                "Меняйте свойства через классы",
                "opacity для плавного появления/исчезновения"
            ],
            "tests": [
                { "code": "cssAnimation()", "expected": ['1', '0'] }
            ],
            "chapter": "Часть 5: Работа с DOM"
        },
        {
            "id": 49,
            "title": "Работа с атрибутами данных",
            "difficulty": "easy",
            "description": "Установите и получите data-атрибуты",
            "initialCode": "function dataAttributes() {\n const div = document.createElement('div');\n \n // Работа с data-атрибутами\n \n return [id, name];\n}",
            "solution": "function dataAttributes() {\n const div = document.createElement('div');\n \n // Установите data-атрибуты\n div.dataset.id = '123';\n div.dataset.userName = 'Иван';\n \n // Получите data-атрибуты\n const id = div.dataset.id;\n const name = div.dataset.userName;\n \n return [id, name];\n}",
            "hints": [
                "dataset предоставляет доступ к data-атрибутам",
                "data-id становится dataset.id",
                "data-user-name становится dataset.userName"
            ],
            "tests": [
                { "code": "dataAttributes()", "expected": ['123', 'Иван'] }
            ],
            "chapter": "Часть 5: Работа с DOM"
        },
        {
            "id": 50,
            "title": "DocumentFragment для оптимизации",
            "difficulty": "hard",
            "description": "Используйте DocumentFragment для массового добавления элементов",
            "initialCode": "function useFragment() {\n const container = document.createElement('div');\n \n // Используйте DocumentFragment\n \n return container.children.length;\n}",
            "solution": "function useFragment() {\n const container = document.createElement('div');\n \n // Создайте DocumentFragment\n const fragment = document.createDocumentFragment();\n \n // Добавьте элементы во фрагмент\n for(let i = 0; i < 100; i++) {\n const p = document.createElement('p');\n p.textContent = `Элемент ${i}`;\n fragment.appendChild(p);\n }\n \n // Добавьте фрагмент в DOM (одна операция)\n container.appendChild(fragment);\n \n return container.children.length;\n}",
            "hints": [
                "DocumentFragment - виртуальный контейнер",
                "Элементы добавляются во фрагмент",
                "Одна операция добавления фрагмента в DOM"
            ],
            "tests": [
                { "code": "useFragment()", "expected": 100 }
            ],
            "chapter": "Часть 5: Работа с DOM"
        },

        {
            "id": 51,
            "title": "Callback функция",
            "difficulty": "easy",
            "description": "Создайте функцию, принимающую callback",
            "initialCode": "function processData(data, callback) {\n // Вызовите callback с результатом\n \n}",
            "solution": "function processData(data, callback) {\n // Имитация асинхронной обработки\n setTimeout(() => {\n const result = data.toUpperCase();\n callback(result);\n }, 0);\n}",
            "hints": [
                "Callback - функция, передаваемая как аргумент",
                "Вызывается когда операция завершена",
                "setTimeout имитирует асинхронность"
            ],
            "tests": [
                { "code": "let result = ''; processData('test', (res) => { result = res; }); setTimeout(() => result, 10)", "expected": 'TEST' }
            ],
            "chapter": "Часть 6: Асинхронность"
        },
        {
            "id": 52,
            "title": "Promise - базовое использование",
            "difficulty": "medium",
            "description": "Создайте и используйте Promise",
            "initialCode": "function fetchData() {\n // Верните Promise\n \n}",
            "solution": "function fetchData() {\n return new Promise((resolve, reject) => {\n setTimeout(() => {\n const success = true;\n if (success) {\n resolve('Данные получены');\n } else {\n reject('Ошибка');\n }\n }, 100);\n });\n}",
            "hints": [
                "Promise принимает executor функцию",
                "resolve вызывается при успехе",
                "reject вызывается при ошибке"
            ],
            "tests": [
                { "code": "fetchData().then(data => data)", "expected": 'Данные получены' }
            ],
            "chapter": "Часть 6: Асинхронность"
        },
        {
            "id": 53,
            "title": "Цепочка Promise (then/catch)",
            "difficulty": "medium",
            "description": "Создайте цепочку Promise с обработкой ошибок",
            "initialCode": "function promiseChain() {\n return Promise.resolve(10)\n // Добавьте then и catch\n \n}",
            "solution": "function promiseChain() {\n return Promise.resolve(10)\n .then(value => value * 2)\n .then(value => {\n if (value > 15) {\n throw new Error('Слишком большое');\n }\n return value;\n })\n .catch(error => {\n return 'Ошибка обработана: ' + error.message;\n });\n}",
            "hints": [
                "then обрабатывает успешный результат",
                "catch обрабатывает ошибки",
                "Можно выбрасывать ошибки через throw"
            ],
            "tests": [
                { "code": "promiseChain()", "expected": 'Ошибка обработана: Слишком большое' }
            ],
            "chapter": "Часть 6: Асинхронность"
        },
        {
            "id": 54,
            "title": "Promise.all",
            "difficulty": "medium",
            "description": "Используйте Promise.all для параллельного выполнения",
            "initialCode": "function parallelPromises() {\n const p1 = Promise.resolve(1);\n const p2 = Promise.resolve(2);\n const p3 = Promise.resolve(3);\n \n // Используйте Promise.all\n \n}",
            "solution": "function parallelPromises() {\n const p1 = Promise.resolve(1);\n const p2 = Promise.resolve(2);\n const p3 = Promise.resolve(3);\n \n return Promise.all([p1, p2, p3])\n .then(values => values.reduce((sum, val) => sum + val, 0));\n}",
            "hints": [
                "Promise.all ждет все промисы",
                "Возвращает массив результатов",
                "Если один промис отвергнут - вся группа отвергнута"
            ],
            "tests": [
                { "code": "parallelPromises()", "expected": 6 }
            ],
            "chapter": "Часть 6: Асинхронность"
        },
        {
            "id": 55,
            "title": "Promise.race",
            "difficulty": "hard",
            "description": "Используйте Promise.race для гонки промисов",
            "initialCode": "function promiseRace() {\n const fast = new Promise(resolve => \n setTimeout(() => resolve('быстрый'), 50)\n );\n const slow = new Promise(resolve => \n setTimeout(() => resolve('медленный'), 100)\n );\n \n // Используйте Promise.race\n \n}",
            "solution": "function promiseRace() {\n const fast = new Promise(resolve => \n setTimeout(() => resolve('быстрый'), 50)\n );\n const slow = new Promise(resolve => \n setTimeout(() => resolve('медленный'), 100)\n );\n \n return Promise.race([fast, slow]);\n}",
            "hints": [
                "Promise.race возвращает первый завершенный промис",
                "Неважно resolved или rejected",
                "Полезно для таймаутов"
            ],
            "tests": [
                { "code": "promiseRace()", "expected": 'быстрый' }
            ],
            "chapter": "Часть 6: Асинхронность"
        },
        {
            "id": 56,
            "title": "Async/await - базовое использование",
            "difficulty": "medium",
            "description": "Используйте async/await для асинхронного кода",
            "initialCode": "async function fetchUser() {\n // Используйте async/await\n \n}",
            "solution": "async function fetchUser() {\n // Имитация асинхронного запроса\n const getUser = () => \n new Promise(resolve => \n setTimeout(() => resolve({name: 'Иван', age: 25}), 100)\n );\n \n try {\n const user = await getUser();\n return user.name;\n } catch (error) {\n return 'Ошибка: ' + error.message;\n }\n}",
            "hints": [
                "async функция всегда возвращает Promise",
                "await можно использовать только в async функциях",
                "Используйте try/catch для обработки ошибок"
            ],
            "tests": [
                { "code": "fetchUser()", "expected": 'Иван' }
            ],
            "chapter": "Часть 6: Асинхронность"
        },
        {
            "id": 57,
            "title": "Обработка ошибок в async/await",
            "difficulty": "medium",
            "description": "Обработайте ошибки в async функции",
            "initialCode": "async function riskyOperation() {\n // Добавьте обработку ошибок\n \n}",
            "solution": "async function riskyOperation() {\n const mightFail = () => \n new Promise((resolve, reject) => {\n const success = Math.random() > 0.5;\n setTimeout(() => {\n if (success) {\n resolve('Успех!');\n } else {\n reject(new Error('Неудача'));\n }\n }, 100);\n });\n \n try {\n const result = await mightFail();\n return result;\n } catch (error) {\n return 'Поймана ошибка: ' + error.message;\n }\n}",
            "hints": [
                "Используйте try/catch блок",
                "await бросит ошибку если промис rejected",
                "Можно обработать ошибку и вернуть fallback"
            ],
            "tests": [
                { "code": "typeof riskyOperation()", "expected": 'object' }
            ],
            "chapter": "Часть 6: Асинхронность"
        },
        {
            "id": 58,
            "title": "Fetch API - GET запрос",
            "difficulty": "medium",
            "description": "Используйте Fetch API для GET запроса",
            "initialCode": "async function fetchUsers() {\n // Используйте fetch\n \n}",
            "solution": "async function fetchUsers() {\n try {\n // Замените на реальный URL или используйте мок\n const response = await fetch('https://jsonplaceholder.typicode.com/users');\n \n if (!response.ok) {\n throw new Error(`HTTP ошибка: ${response.status}`);\n }\n \n const users = await response.json();\n return users.length; // Возвращаем количество пользователей\n } catch (error) {\n return 'Ошибка: ' + error.message;\n }\n}",
            "hints": [
                "fetch возвращает Promise",
                "Проверяйте response.ok",
                "Используйте response.json() для JSON"
            ],
            "tests": [
                { "code": "typeof fetchUsers()", "expected": 'object' }
            ],
            "chapter": "Часть 6: Асинхронность"
        },
        {
            "id": 59,
            "title": "Fetch API - POST запрос",
            "difficulty": "hard",
            "description": "Используйте Fetch API для POST запроса",
            "initialCode": "async function createUser(userData) {\n // Используйте fetch для POST\n \n}",
            "solution": "async function createUser(userData) {\n try {\n const response = await fetch('https://jsonplaceholder.typicode.com/users', {\n method: 'POST',\n headers: {\n 'Content-Type': 'application/json',\n },\n body: JSON.stringify(userData)\n });\n \n if (!response.ok) {\n throw new Error(`HTTP ошибка: ${response.status}`);\n }\n \n const data = await response.json();\n return data.id || 'Пользователь создан';\n } catch (error) {\n return 'Ошибка: ' + error.message;\n }\n}",
            "hints": [
                "Укажите method: 'POST'",
                "Установите Content-Type header",
                "JSON.stringify для тела запроса"
            ],
            "tests": [
                { "code": "createUser({name: 'Иван'})", "expected": 'object' }
            ],
            "chapter": "Часть 6: Асинхронность"
        },
        {
            "id": 60,
            "title": "AbortController для отмены запроса",
            "difficulty": "hard",
            "description": "Используйте AbortController для отмены fetch запроса",
            "initialCode": "async function cancellableFetch() {\n // Используйте AbortController\n \n}",
            "solution": "async function cancellableFetch() {\n const controller = new AbortController();\n const signal = controller.signal;\n \n // Запрос с возможностью отмены\n const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users', {\n signal: signal\n });\n \n // Имитация отмены через 10мс\n setTimeout(() => {\n controller.abort();\n }, 10);\n \n try {\n const response = await fetchPromise;\n return 'Запрос завершен';\n } catch (error) {\n if (error.name === 'AbortError') {\n return 'Запрос отменен';\n }\n return 'Другая ошибка: ' + error.message;\n }\n}",
            "hints": [
                "Создайте AbortController",
                "Передайте signal в опции fetch",
                "controller.abort() отменяет запрос"
            ],
            "tests": [
                { "code": "cancellableFetch()", "expected": 'Запрос отменен' }
            ],
            "chapter": "Часть 6: Асинхронность"
        },

        {
            "id": 61,
            "title": "Конструктор функции",
            "difficulty": "medium",
            "description": "Создайте конструктор функции для объектов Person",
            "initialCode": "function Person(name, age) {\n // Реализуйте конструктор\n \n}",
            "solution": "function Person(name, age) {\n this.name = name;\n this.age = age;\n \n this.greet = function() {\n return `Привет, я ${this.name}`;\n };\n}",
            "hints": [
                "Используйте this для установки свойств",
                "Методы можно добавлять в конструкторе",
                "Вызывайте с new Person()"
            ],
            "tests": [
                { "code": "const person = new Person('Иван', 25); [person.name, person.age, person.greet()]", "expected": ['Иван', 25, 'Привет, я Иван'] }
            ],
            "chapter": "Часть 7: ООП в JavaScript"
        },
        {
            "id": 62,
            "title": "Прототипы и наследование",
            "difficulty": "hard",
            "description": "Создайте наследование через прототипы",
            "initialCode": "function Animal(name) {\n this.name = name;\n}\n\nAnimal.prototype.speak = function() {\n return `${this.name} издает звук`;\n};\n\nfunction Dog(name, breed) {\n // Наследуйте от Animal\n \n}\n\n// Настройте прототип\n \nreturn new Dog('Бобик', 'овчарка').speak();",
            "solution": "function Animal(name) {\n this.name = name;\n}\n\nAnimal.prototype.speak = function() {\n return `${this.name} издает звук`;\n};\n\nfunction Dog(name, breed) {\n // Наследуйте от Animal\n Animal.call(this, name);\n this.breed = breed;\n}\n\n// Настройте прототип\nDog.prototype = Object.create(Animal.prototype);\nDog.prototype.constructor = Dog;\n\nDog.prototype.bark = function() {\n return `${this.name} лает: Гав!`;\n};\n\nreturn new Dog('Бобик', 'овчарка').speak();",
            "hints": [
                "Animal.call(this, name) вызывает родительский конструктор",
                "Object.create создает новый объект с указанным прототипом",
                "Восстановите constructor"
            ],
            "tests": [
                { "code": "const dog = new Dog('Бобик', 'овчарка'); dog.speak()", "expected": 'Бобик издает звук' }
            ],
            "chapter": "Часть 7: ООП в JavaScript"
        },
        {
            "id": 63,
            "title": "Классы ES6 - базовый синтаксис",
            "difficulty": "easy",
            "description": "Создайте класс Person с конструктором и методом",
            "initialCode": "class Person {\n // Реализуйте класс\n \n}",
            "solution": "class Person {\n constructor(name, age) {\n this.name = name;\n this.age = age;\n }\n \n greet() {\n return `Привет, я ${this.name}, мне ${this.age} лет`;\n }\n \n haveBirthday() {\n this.age++;\n return this.age;\n }\n}",
            "hints": [
                "constructor вызывается при new Person()",
                "Методы добавляются в прототип",
                "Используйте this для доступа к свойствам"
            ],
            "tests": [
                { "code": "const person = new Person('Анна', 30); [person.greet(), person.haveBirthday()]", "expected": ['Привет, я Анна, мне 30 лет', 31] }
            ],
            "chapter": "Часть 7: ООП в JavaScript"
        },
        {
            "id": 64,
            "title": "Наследование классов",
            "difficulty": "medium",
            "description": "Создайте наследование классов Student extends Person",
            "initialCode": "class Person {\n constructor(name, age) {\n this.name = name;\n this.age = age;\n }\n}\n\nclass Student extends Person {\n // Реализуйте наследование\n \n}",
            "solution": "class Person {\n constructor(name, age) {\n this.name = name;\n this.age = age;\n }\n \n introduce() {\n return `Меня зовут ${this.name}`;\n }\n}\n\nclass Student extends Person {\n constructor(name, age, major) {\n super(name, age); // Вызов родительского конструктора\n this.major = major;\n }\n \n study() {\n return `${this.name} изучает ${this.major}`;\n }\n \n // Переопределение метода\n introduce() {\n return `${super.introduce()}, я студент`;\n }\n}",
            "hints": [
                "extends создает наследование",
                "super() вызывает родительский конструктор",
                "super.method() вызывает родительский метод"
            ],
            "tests": [
                { "code": "const student = new Student('Иван', 20, 'Информатика'); [student.introduce(), student.study()]", "expected": ['Меня зовут Иван, я студент', 'Иван изучает Информатика'] }
            ],
            "chapter": "Часть 7: ООП в JavaScript"
        },
        {
            "id": 65,
            "title": "Геттеры и сеттеры",
            "difficulty": "medium",
            "description": "Добавьте геттеры и сеттеры в класс",
            "initialCode": "class Rectangle {\n constructor(width, height) {\n this.width = width;\n this.height = height;\n }\n \n // Добавьте геттер area\n \n // Добавьте сеттер для width с валидацией\n \n}",
            "solution": "class Rectangle {\n constructor(width, height) {\n this._width = width;\n this._height = height;\n }\n \n // Геттер для площади\n get area() {\n return this._width * this._height;\n }\n \n // Геттер для ширины\n get width() {\n return this._width;\n }\n \n // Сеттер для ширины с валидацией\n set width(value) {\n if (value <= 0) {\n throw new Error('Ширина должна быть положительной');\n }\n this._width = value;\n }\n \n // Аналогично для height\n}",
            "hints": [
                "get создает геттер (вызывается как свойство)",
                "set создает сеттер (используется при присваивании)",
                "Используйте _ префикс для приватных свойств"
            ],
            "tests": [
                { "code": "const rect = new Rectangle(5, 10); [rect.area, rect.width]", "expected": [50, 5] }
            ],
            "chapter": "Часть 7: ООП в JavaScript"
        },
        {
            "id": 66,
            "title": "Статические методы и свойства",
            "difficulty": "medium",
            "description": "Добавьте статические методы в класс",
            "initialCode": "class MathUtils {\n // Добавьте статический метод\n \n}",
            "solution": "class MathUtils {\n // Статический метод\n static sum(a, b) {\n return a + b;\n }\n \n static multiply(a, b) {\n return a * b;\n }\n \n // Статическое свойство\n static PI = 3.14159;\n \n // Статический метод, использующий другие статические методы\n static circleArea(radius) {\n return this.PI * radius * radius;\n }\n}",
            "hints": [
                "static создает метод/свойство класса, а не экземпляра",
                "Вызывается через имя класса: MathUtils.sum()",
                "Не имеет доступа к this экземпляра"
            ],
            "tests": [
                { "code": "[MathUtils.sum(2, 3), MathUtils.PI, MathUtils.circleArea(2)]", "expected": [5, 3.14159, 12.56636] }
            ],
            "chapter": "Часть 7: ООП в JavaScript"
        },
        {
            "id": 67,
            "title": "Приватные поля и методы",
            "difficulty": "hard",
            "description": "Используйте приватные поля (ES2022)",
            "initialCode": "class BankAccount {\n // Используйте приватные поля\n \n constructor(initialBalance) {\n \n }\n \n deposit(amount) {\n \n }\n \n get balance() {\n \n }\n}",
            "solution": "class BankAccount {\n // Приватные поля\n #balance;\n #transactionCount = 0;\n \n constructor(initialBalance) {\n this.#balance = initialBalance;\n }\n \n deposit(amount) {\n if (amount <= 0) {\n throw new Error('Сумма должна быть положительной');\n }\n this.#balance += amount;\n this.#transactionCount++;\n return this.#balance;\n }\n \n withdraw(amount) {\n if (amount > this.#balance) {\n throw new Error('Недостаточно средств');\n }\n this.#balance -= amount;\n this.#transactionCount++;\n return this.#balance;\n }\n \n // Геттер для баланса\n get balance() {\n return this.#balance;\n }\n \n // Приватный метод\n #logTransaction(type, amount) {\n console.log(`${type}: ${amount}`);\n }\n}",
            "hints": [
                "# создает приватное поле/метод",
                "Недоступно извне класса",
                "Доступно только внутри класса"
            ],
            "tests": [
                { "code": "const account = new BankAccount(1000); account.deposit(500)", "expected": 1500 }
            ],
            "chapter": "Часть 7: ООП в JavaScript"
        },
        {
            "id": 68,
            "title": "Полиморфизм",
            "difficulty": "hard",
            "description": "Продемонстрируйте полиморфизм через переопределение методов",
            "initialCode": "class Shape {\n area() {\n return 0;\n }\n}\n\nclass Circle extends Shape {\n constructor(radius) {\n super();\n this.radius = radius;\n }\n \n // Переопределите area\n \n}\n\nclass Square extends Shape {\n constructor(side) {\n super();\n this.side = side;\n }\n \n // Переопределите area\n \n}\n\nreturn [new Circle(5).area(), new Square(4).area()];",
            "solution": "class Shape {\n area() {\n return 0;\n }\n \n perimeter() {\n return 0;\n }\n}\n\nclass Circle extends Shape {\n constructor(radius) {\n super();\n this.radius = radius;\n }\n \n // Переопределите area\n area() {\n return Math.PI * this.radius * this.radius;\n }\n \n perimeter() {\n return 2 * Math.PI * this.radius;\n }\n}\n\nclass Square extends Shape {\n constructor(side) {\n super();\n this.side = side;\n }\n \n // Переопределите area\n area() {\n return this.side * this.side;\n }\n \n perimeter() {\n return 4 * this.side;\n }\n}\n\n// Полиморфизм: один интерфейс, разные реализации\nfunction printArea(shape) {\n return `Площадь: ${shape.area().toFixed(2)}`;\n}\n\nreturn [printArea(new Circle(5)), printArea(new Square(4))];",
            "hints": [
                "Полиморфизм - разные классы через общий интерфейс",
                "Переопределяйте методы в наследниках",
                "Можно обращаться к объектам через родительский тип"
            ],
            "tests": [
                { "code": "[new Circle(5).area().toFixed(2), new Square(4).area()]", "expected": ['78.54', 16] }
            ],
            "chapter": "Часть 7: ООП в JavaScript"
        },
        {
            "id": 69,
            "title": "Миксины (Mixins)",
            "difficulty": "hard",
            "description": "Используйте миксины для композиции функциональности",
            "initialCode": "// Создайте миксины\n \nclass User {\n constructor(name) {\n this.name = name;\n }\n}\n\n// Примените миксины\n \nreturn new User('Иван').sayHello();",
            "solution": "// Миксин для логирования\nconst Loggable = Base => class extends Base {\n log(message) {\n console.log(`[${new Date().toISOString()}] ${message}`);\n }\n};\n\n// Миксин для приветствия\nconst Greetable = Base => class extends Base {\n sayHello() {\n return `Привет, я ${this.name}`;\n }\n \n sayGoodbye() {\n return `Пока, я ${this.name}`;\n }\n};\n\n// Базовый класс\nclass User {\n constructor(name) {\n this.name = name;\n }\n}\n\n// Примените миксины\nconst UserWithFeatures = Greetable(Loggable(User));\n\nreturn new UserWithFeatures('Иван').sayHello();",
            "hints": [
                "Миксины - способ композиции функциональности",
                "Используйте функции, возвращающие классы",
                "Применяйте через композицию функций"
            ],
            "tests": [
                { "code": "const UserWithFeatures = (Base => class extends Base { sayHello() { return `Привет, ${this.name}`; } })(class User { constructor(name) { this.name = name; } }); new UserWithFeatures('Иван').sayHello()", "expected": 'Привет, Иван' }
            ],
            "chapter": "Часть 7: ООП в JavaScript"
        },
        {
            "id": 70,
            "title": "Интерфейсы через Symbol",
            "difficulty": "hard",
            "description": "Используйте Symbol для создания приватных интерфейсов",
            "initialCode": "// Создайте приватные методы через Symbol\n \nclass SecretVault {\n constructor(password) {\n \n }\n \n // Публичный метод\n getSecret() {\n \n }\n}",
            "solution": "// Символы для приватных методов\nconst _checkPassword = Symbol('checkPassword');\nconst _getStoredSecret = Symbol('getStoredSecret');\n\nclass SecretVault {\n constructor(password) {\n this.password = password;\n this.secret = 'Сверхсекретная информация';\n }\n \n // Приватный метод через Symbol\n [_checkPassword](input) {\n return input === this.password;\n }\n \n [_getStoredSecret]() {\n return this.secret;\n }\n \n // Публичный метод\n getSecret(inputPassword) {\n if (this[_checkPassword](inputPassword)) {\n return this[_getStoredSecret]();\n }\n return 'Доступ запрещен';\n }\n}",
            "hints": [
                "Symbol создает уникальные идентификаторы",
                "Методы с Symbol в имени не видны снаружи",
                "Но доступны внутри класса"
            ],
            "tests": [
                { "code": "const vault = new SecretVault('12345'); [vault.getSecret('wrong'), vault.getSecret('12345')]", "expected": ['Доступ запрещен', 'Сверхсекретная информация'] }
            ],
            "chapter": "Часть 7: ООП в JavaScript"
        },

        {
            "id": 71,
            "title": "Spread оператор",
            "difficulty": "easy",
            "description": "Используйте spread оператор для массивов и объектов",
            "initialCode": "function spreadExamples() {\n const arr1 = [1, 2, 3];\n const arr2 = [4, 5, 6];\n const obj1 = {a: 1, b: 2};\n const obj2 = {b: 3, c: 4};\n \n // Используйте spread\n \n return [combinedArr, combinedObj, copiedArr];\n}",
            "solution": "function spreadExamples() {\n const arr1 = [1, 2, 3];\n const arr2 = [4, 5, 6];\n const obj1 = {a: 1, b: 2};\n const obj2 = {b: 3, c: 4};\n \n // Spread для массивов\n const combinedArr = [...arr1, ...arr2, 7];\n \n // Spread для объектов (поздние перезаписывают ранние)\n const combinedObj = {...obj1, ...obj2};\n \n // Копия массива\n const copiedArr = [...arr1];\n \n return [combinedArr, combinedObj, copiedArr];\n}",
            "hints": [
                "... разворачивает элементы массива/свойства объекта",
                "Для объектов: свойства справа перезаписывают свойства слева",
                "Можно создавать копии"
            ],
            "tests": [
                { "code": "spreadExamples()", "expected": [[1, 2, 3, 4, 5, 6, 7], {a: 1, b: 3, c: 4}, [1, 2, 3]] }
            ],
            "chapter": "Часть 8: Продвинутые концепции"
        },
        {
            "id": 72,
            "title": "Деструктуризация с значениями по умолчанию",
            "difficulty": "medium",
            "description": "Используйте деструктуризацию с значениями по умолчанию",
            "initialCode": "function destructuringWithDefaults() {\n const user = {name: 'Иван', age: 25};\n const numbers = [1, 2];\n \n // Деструктуризация с defaults\n \n return [userName, userAge, userCity, first, second, third];\n}",
            "solution": "function destructuringWithDefaults() {\n const user = {name: 'Иван', age: 25};\n const numbers = [1, 2];\n \n // Деструктуризация объекта с defaults\n const {name: userName, age: userAge, city: userCity = 'Москва'} = user;\n \n // Деструктуризация массива с defaults\n const [first, second, third = 3] = numbers;\n \n return [userName, userAge, userCity, first, second, third];\n}",
            "hints": [
                "Используйте = для значений по умолчанию",
                "Работает и для объектов, и для массивов",
                "Если значения нет - используется default"
            ],
            "tests": [
                { "code": "destructuringWithDefaults()", "expected": ['Иван', 25, 'Москва', 1, 2, 3] }
            ],
            "chapter": "Часть 8: Продвинутые концепции"
        },
        {
            "id": 73,
            "title": "Опциональная цепочка (Optional Chaining)",
            "difficulty": "easy",
            "description": "Используйте optional chaining для безопасного доступа",
            "initialCode": "function optionalChaining() {\n const user = {\n name: 'Иван',\n address: {\n city: 'Москва',\n street: null\n }\n };\n \n const user2 = {};\n \n // Используйте optional chaining\n \n return [city, street, zip, name2, city2];\n}",
            "solution": "function optionalChaining() {\n const user = {\n name: 'Иван',\n address: {\n city: 'Москва',\n street: null\n }\n };\n \n const user2 = {};\n \n // Optional chaining\n const city = user.address?.city; // 'Москва'\n const street = user.address?.street; // null\n const zip = user.address?.zip?.code; // undefined\n \n const name2 = user2?.name; // undefined\n const city2 = user2?.address?.city ?? 'Неизвестно'; // 'Неизвестно'\n \n return [city, street, zip, name2, city2];\n}",
            "hints": [
                "?. останавливает вычисление если значение null/undefined",
                "Работает для свойств, методов, индексов массивов",
                "?? (nullish coalescing) возвращает правую часть если левая null/undefined"
            ],
            "tests": [
                { "code": "optionalChaining()", "expected": ['Москва', null, undefined, undefined, 'Неизвестно'] }
            ],
            "chapter": "Часть 8: Продвинутые концепции"
        },
        {
            "id": 74,
            "title": "Генераторы - базовый синтаксис",
            "difficulty": "hard",
            "description": "Создайте генератор для последовательности чисел",
            "initialCode": "function* numberGenerator() {\n // Реализуйте генератор\n \n}",
            "solution": "function* numberGenerator() {\n let num = 1;\n while (true) {\n yield num;\n num++;\n }\n}\n\n// Или с лимитом\nfunction* limitedGenerator(limit) {\n for(let i = 1; i <= limit; i++) {\n yield i;\n }\n}",
            "hints": [
                "function* создает генератор",
                "yield возвращает значение и приостанавливает выполнение",
                "next() возобновляет выполнение"
            ],
            "tests": [
                { "code": "function* testGen() { yield 1; yield 2; } const gen = testGen(); [gen.next().value, gen.next().value]", "expected": [1, 2] }
            ],
            "chapter": "Часть 8: Продвинутые концепции"
        },
        {
            "id": 75,
            "title": "Итераторы и for...of",
            "difficulty": "hard",
            "description": "Создайте собственный итератор",
            "initialCode": "class Range {\n constructor(start, end) {\n this.start = start;\n this.end = end;\n }\n \n // Добавьте итератор\n \n}",
            "solution": "class Range {\n constructor(start, end) {\n this.start = start;\n this.end = end;\n }\n \n // Метод, возвращающий итератор\n [Symbol.iterator]() {\n let current = this.start;\n const end = this.end;\n \n return {\n next() {\n if (current <= end) {\n return {value: current++, done: false};\n }\n return {done: true};\n }\n };\n }\n}",
            "hints": [
                "Symbol.iterator определяет итератор по умолчанию",
                "Метод должен возвращать объект с next()",
                "next() возвращает {value, done}"
            ],
            "tests": [
                { "code": "const range = new Range(1, 3); [...range]", "expected": [1, 2, 3] }
            ],
            "chapter": "Часть 8: Продвинутые концепции"
        },
        {
            "id": 76,
            "title": "Прокси (Proxy)",
            "difficulty": "hard",
            "description": "Используйте Proxy для перехвата операций",
            "initialCode": "function createProtectedObject(target) {\n // Создайте Proxy\n \n}",
            "solution": "function createProtectedObject(target) {\n return new Proxy(target, {\n get(obj, prop) {\n if (prop in obj) {\n return obj[prop];\n } else {\n return `Свойство \\\"${prop}\\\" не существует`;\n }\n },\n \n set(obj, prop, value) {\n if (prop === 'password') {\n console.log('Попытка изменить пароль отклонена');\n return false; // Запрещаем изменение\n }\n \n if (typeof value === 'string' && value.length > 50) {\n throw new Error('Значение слишком длинное');\n }\n \n obj[prop] = value;\n return true;\n },\n \n deleteProperty(obj, prop) {\n if (prop.startsWith('_')) {\n throw new Error('Нельзя удалять приватные свойства');\n }\n delete obj[prop];\n return true;\n }\n });\n}",
            "hints": [
                "Proxy перехватывает операции над объектом",
                "Можно перехватывать get, set, delete и другие",
                "Полезно для валидации, логирования, защиты"
            ],
            "tests": [
                { "code": "const obj = createProtectedObject({name: 'Иван'}); obj.name", "expected": 'Иван' }
            ],
            "chapter": "Часть 8: Продвинутые концепции"
        },
        {
            "id": 77,
            "title": "Reflect API",
            "difficulty": "hard",
            "description": "Используйте Reflect для метапрограммирования",
            "initialCode": "function reflectExamples() {\n const obj = {a: 1, b: 2};\n \n // Используйте Reflect\n \n return [hasA, getB, props, newObj];\n}",
            "solution": "function reflectExamples() {\n const obj = {a: 1, b: 2};\n \n // Reflect методы\n const hasA = Reflect.has(obj, 'a'); // true\n const getB = Reflect.get(obj, 'b'); // 2\n const props = Reflect.ownKeys(obj); // ['a', 'b']\n \n // Создание объекта\n const newObj = Reflect.construct(Object, []);\n \n // Установка свойства\n Reflect.set(obj, 'c', 3);\n \n // Удаление свойства\n Reflect.deleteProperty(obj, 'a');\n \n return [hasA, getB, props, Object.keys(newObj)];\n}",
            "hints": [
                "Reflect предоставляет методы для метаопераций",
                "Аналогичны операторам, но в виде функций",
                "Полезно с Proxy для переадресации"
            ],
            "tests": [
                { "code": "reflectExamples()", "expected": [true, 2, ['a', 'b'], []] }
            ],
            "chapter": "Часть 8: Продвинутые концепции"
        },
        {
            "id": 78,
            "title": "WeakMap и WeakSet",
            "difficulty": "hard",
            "description": "Используйте WeakMap для приватных данных",
            "initialCode": "const privateData = new WeakMap();\n\nclass User {\n constructor(name, age) {\n // Храните приватные данные в WeakMap\n \n }\n \n getName() {\n \n }\n \n getAge() {\n \n }\n}",
            "solution": "const privateData = new WeakMap();\n\nclass User {\n constructor(name, age) {\n // Храните приватные данные в WeakMap\n privateData.set(this, {\n name: name,\n age: age,\n createdAt: new Date()\n });\n }\n \n getName() {\n return privateData.get(this).name;\n }\n \n getAge() {\n return privateData.get(this).age;\n }\n \n // Метод для WeakSet\n static #deletedUsers = new WeakSet();\n \n delete() {\n User.#deletedUsers.add(this);\n // Объект может быть удален сборщиком мусора\n }\n \n static isDeleted(user) {\n return User.#deletedUsers.has(user);\n }\n}",
            "hints": [
                "WeakMap хранит слабые ссылки на ключи",
                "Если объект удален - запись удаляется из WeakMap",
                "WeakSet аналогичен для множеств"
            ],
            "tests": [
                { "code": "const user = new User('Иван', 25); [user.getName(), user.getAge()]", "expected": ['Иван', 25] }
            ],
            "chapter": "Часть 8: Продвинутые концепции"
        },
        {
            "id": 79,
            "title": "Модули ES6 - экспорт",
            "difficulty": "medium",
            "description": "Создайте модуль с разными типами экспорта",
            "initialCode": "// math.js - модуль с математическими функциями\n// Экспортируйте функции\n \n \n \n// Экспорт по умолчанию\n ",
            "solution": "// math.js - модуль с математическими функциями\n\n// Именованный экспорт\nexport const PI = 3.14159;\n\nexport function sum(a, b) {\n return a + b;\n}\n\nexport function multiply(a, b) {\n return a * b;\n}\n\n// Экспорт нескольких значений\nconst privateVar = 'секрет';\nfunction internal() {\n return 'внутренняя';\n}\n\nexport { privateVar as publicName, internal };\n\n// Экспорт по умолчанию\nexport default class Calculator {\n add(a, b) {\n return a + b;\n }\n \n subtract(a, b) {\n return a - b;\n }\n}",
            "hints": [
                "export создает именованный экспорт",
                "export default создает экспорт по умолчанию",
                "as переименовывает при экспорте"
            ],
            "tests": [
                { "code": "typeof PI", "expected": 'undefined' } // В среде без модулей
            ],
            "chapter": "Часть 8: Продвинутые концепции"
        },
        {
            "id": 80,
            "title": "Модули ES6 - импорт",
            "difficulty": "medium",
            "description": "Импортируйте функции из модуля",
            "initialCode": "// app.js - импорт из math.js\n// Импортируйте функции\n \n \n \nreturn sum(2, 3);",
            "solution": "// app.js - импорт из math.js\n\n// Импорт именованных экспортов\nimport { PI, sum, multiply } from './math.js';\n\n// Импорт с переименованием\nimport { publicName as secret } from './math.js';\n\n// Импорт всего как объекта\nimport * as math from './math.js';\n\n// Импорт по умолчанию\nimport Calculator from './math.js';\n\n// Использование\nconst calc = new Calculator();\nreturn sum(2, 3);",
            "hints": [
                "import { name } для именованных импортов",
                "import defaultExport для импорта по умолчанию",
                "as переименовывает при импорте"
            ],
            "tests": [
                { "code": "5", "expected": 5 } // Заглушка
            ],
            "chapter": "Часть 8: Продвинутые концепции"
        },

        {
            "id": 81,
            "title": "Модульный паттерн (до ES6)",
            "difficulty": "medium",
            "description": "Создайте модуль с помощью IIFE",
            "initialCode": "const CounterModule = (function() {\n // Реализуйте модульный паттерн\n \n})();\n\nreturn CounterModule.getCount();",
            "solution": "const CounterModule = (function() {\n // Приватная переменная\n let count = 0;\n \n // Приватная функция\n function log(message) {\n console.log(`[Counter] ${message}`);\n }\n \n // Публичное API\n return {\n increment() {\n count++;\n log(`Увеличено до ${count}`);\n return count;\n },\n \n decrement() {\n count--;\n log(`Уменьшено до ${count}`);\n return count;\n },\n \n getCount() {\n return count;\n },\n \n reset() {\n count = 0;\n log('Сброшено');\n return count;\n }\n };\n})();\n\nCounterModule.increment();\nCounterModule.increment();\nreturn CounterModule.getCount();",
            "hints": [
                "IIFE создает изолированную область видимости",
                "Приватные переменные недоступны снаружи",
                "Возвращаемый объект - публичное API"
            ],
            "tests": [
                { "code": "const module = (function() { let count = 0; return { get: () => count, inc: () => ++count }; })(); module.inc(); module.get()", "expected": 1 }
            ],
            "chapter": "Часть 9: Практические паттерны"
        },
        {
            "id": 82,
            "title": "Паттерн Наблюдатель (Observer)",
            "difficulty": "hard",
            "description": "Реализуйте паттерн Наблюдатель",
            "initialCode": "class EventEmitter {\n constructor() {\n this.events = {};\n }\n \n // Реализуйте методы\n \n}",
            "solution": "class EventEmitter {\n constructor() {\n this.events = {};\n }\n \n // Подписка на событие\n on(event, listener) {\n if (!this.events[event]) {\n this.events[event] = [];\n }\n this.events[event].push(listener);\n \n // Возврат функции для отписки\n return () => this.off(event, listener);\n }\n \n // Отписка от события\n off(event, listener) {\n if (!this.events[event]) return;\n \n const index = this.events[event].indexOf(listener);\n if (index !== -1) {\n this.events[event].splice(index, 1);\n }\n }\n \n // Генерация события\n emit(event, ...args) {\n if (!this.events[event]) return;\n \n // Копия массива на случай изменения во время вызова\n const listeners = this.events[event].slice();\n \n for (const listener of listeners) {\n try {\n listener.apply(this, args);\n } catch (error) {\n console.error(`Ошибка в обработчике ${event}:`, error);\n }\n }\n }\n \n // Подписка один раз\n once(event, listener) {\n const wrapper = (...args) => {\n listener.apply(this, args);\n this.off(event, wrapper);\n };\n \n this.on(event, wrapper);\n }\n}",
            "hints": [
                "Храните обработчики в объекте {event: [listeners]}",
                "on добавляет обработчик",
                "emit вызывает все обработчики события"
            ],
            "tests": [
                { "code": "const emitter = new EventEmitter(); let count = 0; emitter.on('test', () => count++); emitter.emit('test'); count", "expected": 1 }
            ],
            "chapter": "Часть 9: Практические паттерны"
        },
        {
            "id": 83,
            "title": "Паттерн Одиночка (Singleton)",
            "difficulty": "medium",
            "description": "Реализуйте паттерн Одиночка",
            "initialCode": "class Database {\n // Реализуйте Singleton\n \n constructor(config) {\n this.config = config;\n }\n \n query(sql) {\n return `Результат: ${sql}`;\n }\n}",
            "solution": "class Database {\n static instance = null;\n \n constructor(config) {\n if (Database.instance) {\n return Database.instance;\n }\n \n this.config = config;\n this.connection = this.connect();\n Database.instance = this;\n }\n \n connect() {\n console.log('Подключение к базе...');\n return { connected: true, config: this.config };\n }\n \n query(sql) {\n return `Результат: ${sql}`;\n }\n \n // Статический метод для получения экземпляра\n static getInstance(config) {\n if (!Database.instance) {\n Database.instance = new Database(config);\n }\n return Database.instance;\n }\n}\n\n// Или через замыкание\nconst createSingleton = () => {\n let instance;\n \n return class Database {\n constructor(config) {\n if (instance) {\n return instance;\n }\n instance = this;\n this.config = config;\n }\n };\n};",
            "hints": [
                "Храните экземпляр в статическом свойстве",
                "Проверяйте наличие экземпляра в конструкторе",
                "Возвращайте существующий экземпляр если есть"
            ],
            "tests": [
                { "code": "const db1 = new Database({host: 'localhost'}); const db2 = new Database({host: 'remote'}); db1 === db2", "expected": true }
            ],
            "chapter": "Часть 9: Практические паттерны"
        },
        {
            "id": 84,
            "title": "Фабричный метод (Factory)",
            "difficulty": "medium",
            "description": "Реализуйте фабричный метод для создания объектов",
            "initialCode": "class VehicleFactory {\n // Реализуйте фабричный метод\n \n}\n\nclass Car {\n drive() {\n return 'Еду на машине';\n }\n}\n\nclass Bike {\n ride() {\n return 'Еду на велосипеде';\n }\n}",
            "solution": "class VehicleFactory {\n // Фабричный метод\n createVehicle(type, options = {}) {\n switch(type) {\n case 'car':\n return new Car(options.brand, options.model);\n case 'bike':\n return new Bike(options.brand, options.gears);\n case 'truck':\n return new Truck(options.brand, options.capacity);\n default:\n throw new Error(`Неизвестный тип: ${type}`);\n }\n }\n \n // Альтернатива: отдельные методы\n createCar(brand, model) {\n return new Car(brand, model);\n }\n \n createBike(brand, gears) {\n return new Bike(brand, gears);\n }\n}\n\nclass Car {\n constructor(brand = 'Unknown', model = 'Unknown') {\n this.brand = brand;\n this.model = model;\n }\n \n drive() {\n return `Еду на ${this.brand} ${this.model}`;\n }\n}\n\nclass Bike {\n constructor(brand = 'Unknown', gears = 1) {\n this.brand = brand;\n this.gears = gears;\n }\n \n ride() {\n return `Еду на велосипеде ${this.brand} (${this.gears} скоростей)`;\n }\n}",
            "hints": [
                "Фабричный метод создает объекты",
                "Скрывает детали создания",
                "Можно создавать разные типы объектов"
            ],
            "tests": [
                { "code": "const factory = new VehicleFactory(); factory.createVehicle('car', {brand: 'Toyota'}).drive()", "expected": 'Еду на Toyota Unknown' }
            ],
            "chapter": "Часть 9: Практические паттерны"
        },
        {
            "id": 85,
            "title": "Декоратор (Decorator)",
            "difficulty": "hard",
            "description": "Реализуйте паттерн Декоратор",
            "initialCode": "function withLogging(func) {\n // Реализуйте декоратор\n \n}\n\nfunction expensiveOperation(n) {\n return n * n;\n}",
            "solution": "// Декоратор функции\nfunction withLogging(func) {\n return function(...args) {\n console.log(`Вызов ${func.name} с аргументами:`, args);\n const start = performance.now();\n const result = func.apply(this, args);\n const end = performance.now();\n console.log(`Результат: ${result}, время: ${(end - start).toFixed(2)}мс`);\n return result;\n };\n}\n\n// Декоратор для класса\nfunction withValidation(target) {\n return class extends target {\n set age(value) {\n if (value < 0 || value > 150) {\n throw new Error('Некорректный возраст');\n }\n super.age = value;\n }\n };\n}\n\n// Пример использования\nfunction expensiveOperation(n) {\n let result = 0;\n for (let i = 0; i < n * 1000000; i++) {\n result += Math.random();\n }\n return result;\n}\n\nconst loggedOperation = withLogging(expensiveOperation);\nreturn loggedOperation(5);",
            "hints": [
                "Декоратор оборачивает функцию/класс",
                "Добавляет новое поведение",
                "Возвращает новую функцию/класс"
            ],
            "tests": [
                { "code": "const double = (x) => x * 2; const loggedDouble = (func => (...args) => { console.log('Вызов'); return func(...args); })(double); loggedDouble(5)", "expected": 10 }
            ],
            "chapter": "Часть 9: Практические паттерны"
        },
        {
            "id": 86,
            "title": "Стратегия (Strategy)",
            "difficulty": "hard",
            "description": "Реализуйте паттерн Стратегия",
            "initialCode": "class PaymentContext {\n // Реализуйте паттерн Стратегия\n \n}\n\nclass CreditCardPayment {\n pay(amount) {\n return `Оплата картой: ${amount}`;\n }\n}\n\nclass PayPalPayment {\n pay(amount) {\n return `Оплата PayPal: ${amount}`;\n }\n}",
            "solution": "// Интерфейс стратегии\nclass PaymentStrategy {\n pay(amount) {\n throw new Error('Метод pay должен быть реализован');\n }\n}\n\n// Конкретные стратегии\nclass CreditCardPayment extends PaymentStrategy {\n constructor(cardNumber, cvv) {\n super();\n this.cardNumber = cardNumber;\n this.cvv = cvv;\n }\n \n pay(amount) {\n // Логика оплаты картой\n return `Оплачено ${amount} руб. картой ${this.cardNumber.slice(-4)}`;\n }\n}\n\nclass PayPalPayment extends PaymentStrategy {\n constructor(email) {\n super();\n this.email = email;\n }\n \n pay(amount) {\n // Логика PayPal\n return `Оплачено ${amount} руб. через PayPal (${this.email})`;\n }\n}\n\nclass CryptoPayment extends PaymentStrategy {\n constructor(walletAddress) {\n super();\n this.walletAddress = walletAddress;\n }\n \n pay(amount) {\n // Логика крипто-оплаты\n return `Оплачено ${amount} руб. криптовалютой на адрес ${this.walletAddress.slice(0, 10)}...`;\n }\n}\n\n// Контекст\nclass PaymentContext {\n constructor(strategy = null) {\n this.strategy = strategy;\n }\n \n setStrategy(strategy) {\n this.strategy = strategy;\n }\n \n executePayment(amount) {\n if (!this.strategy) {\n throw new Error('Стратегия оплаты не установлена');\n }\n return this.strategy.pay(amount);\n }\n}",
            "hints": [
                "Стратегия определяет семейство алгоритмов",
                "Контекст использует стратегию",
                "Стратегии взаимозаменяемы"
            ],
            "tests": [
                { "code": "const context = new PaymentContext(); context.setStrategy(new CreditCardPayment('1234567812345678', '123')); context.executePayment(1000)", "expected": 'Оплачено 1000 руб. картой 5678' }
            ],
            "chapter": "Часть 9: Практические паттерны"
        },
        {
            "id": 87,
            "title": "Адаптер (Adapter)",
            "difficulty": "hard",
            "description": "Реализуйте паттерн Адаптер",
            "initialCode": "// Старый интерфейс\nclass OldPrinter {\n printText(text) {\n console.log(`Печать: ${text}`);\n }\n}\n\n// Новый интерфейс\nclass NewPrinter {\n print(message) {\n console.log(`Новая печать: ${message}`);\n }\n}\n\n// Реализуйте адаптер\n ",
            "solution": "// Старый интерфейс\nclass OldPrinter {\n printText(text) {\n return `Печать: ${text}`;\n }\n}\n\n// Новый интерфейс\nclass NewPrinter {\n print(message) {\n return `Новая печать: ${message}`;\n }\n}\n\n// Адаптер: преобразует OldPrinter к интерфейсу NewPrinter\nclass PrinterAdapter {\n constructor(oldPrinter) {\n this.oldPrinter = oldPrinter;\n }\n \n // Реализуем новый интерфейс\n print(message) {\n // Адаптация вызова\n const result = this.oldPrinter.printText(message);\n // Возможно дополнительное преобразование\n return result.replace('Печать:', 'Адаптированная печать:');\n }\n}\n\n// Другой пример: адаптер для функций\nfunction oldApiRequest(url, callback) {\n setTimeout(() => {\n callback(null, {data: 'ответ'});\n }, 100);\n}\n\n// Адаптер для Promise API\nfunction adaptToPromise(oldFunction) {\n return function(...args) {\n return new Promise((resolve, reject) => {\n oldFunction(...args, (error, result) => {\n if (error) {\n reject(error);\n } else {\n resolve(result);\n }\n });\n });\n };\n}\n\nconst newApiRequest = adaptToPromise(oldApiRequest);",
            "hints": [
                "Адаптер преобразует один интерфейс в другой",
                "Позволяет работать со старым кодом через новый интерфейс",
                "Обертка вокруг старого объекта/функции"
            ],
            "tests": [
                { "code": "const adapter = new PrinterAdapter(new OldPrinter()); adapter.print('тест')", "expected": 'Адаптированная печать: тест' }
            ],
            "chapter": "Часть 9: Практические паттерны"
        },
        {
            "id": 88,
            "title": "Промис-пул (Promise Pool)",
            "difficulty": "hard",
            "description": "Реализуйте пул промисов для ограничения параллельных запросов",
            "initialCode": "class PromisePool {\n constructor(maxConcurrent) {\n this.maxConcurrent = maxConcurrent;\n this.queue = [];\n this.running = 0;\n }\n \n // Добавьте задачи в пул\n \n}",
            "solution": "class PromisePool {\n constructor(maxConcurrent) {\n this.maxConcurrent = maxConcurrent;\n this.queue = [];\n this.running = 0;\n this.results = [];\n }\n \n // Добавление задачи\n add(task) {\n return new Promise((resolve, reject) => {\n this.queue.push({\n task,\n resolve,\n reject\n });\n this._processQueue();\n });\n }\n \n // Запуск всех задач из массива\n async all(tasks) {\n const promises = tasks.map(task => this.add(task));\n return Promise.all(promises);\n }\n \n // Обработка очереди\n _processQueue() {\n // Не запускаем если достигнут лимит или очередь пуста\n if (this.running >= this.maxConcurrent || this.queue.length === 0) {\n return;\n }\n \n this.running++;\n const {task, resolve, reject} = this.queue.shift();\n \n // Выполнение задачи\n Promise.resolve()\n .then(() => task())\n .then(result => {\n resolve(result);\n this.results.push(result);\n })\n .catch(error => {\n reject(error);\n })\n .finally(() => {\n this.running--;\n this._processQueue(); // Проверяем очередь снова\n });\n \n // Запускаем следующую задачу, если есть возможность\n if (this.queue.length > 0) {\n this._processQueue();\n }\n }\n}\n\n// Пример использования\nasync function exampleTask(id) {\n await new Promise(resolve => setTimeout(resolve, 100));\n return `Задача ${id} выполнена`;\n}\n\nconst pool = new PromisePool(2); // Максимум 2 параллельных задачи\nreturn pool.all([\n () => exampleTask(1),\n () => exampleTask(2),\n () => exampleTask(3)\n]);",
            "hints": [
                "Очередь задач ожидает выполнения",
                "Запускаем новые задачи когда running < maxConcurrent",
                "После завершения задачи уменьшаем running и проверяем очередь"
            ],
            "tests": [
                { "code": "const pool = new PromisePool(2); pool.add(() => Promise.resolve('test'))", "expected": 'object' }
            ],
            "chapter": "Часть 9: Практические паттерны"
        },
        {
            "id": 89,
            "title": "Мемоизация (Memoization)",
            "difficulty": "medium",
            "description": "Реализуйте мемоизацию для тяжелых вычислений",
            "initialCode": "function memoize(func) {\n // Реализуйте мемоизацию\n \n}",
            "solution": "function memoize(func, resolver) {\n const cache = new Map();\n \n return function(...args) {\n // Генерируем ключ кэша\n const key = resolver ? resolver(...args) : JSON.stringify(args);\n \n // Проверяем кэш\n if (cache.has(key)) {\n return cache.get(key);\n }\n \n // Вычисляем и кэшируем\n const result = func.apply(this, args);\n cache.set(key, result);\n \n return result;\n };\n}\n\n// Пример: мемоизация факториала\nfunction factorial(n) {\n console.log(`Вычисление факториала ${n}`);\n if (n <= 1) return 1;\n return n * factorial(n - 1);\n}\n\nconst memoizedFactorial = memoize(factorial);\n\n// Рекурсивная мемоизация\nfunction memoizeRecursive(func) {\n const cache = new Map();\n \n const memoized = function(...args) {\n const key = JSON.stringify(args);\n \n if (cache.has(key)) {\n return cache.get(key);\n }\n \n // Временная функция для рекурсивных вызовов\n const originalFunc = func;\n func = function(...innerArgs) {\n return memoized(...innerArgs);\n };\n \n const result = originalFunc.apply(this, args);\n cache.set(key, result);\n \n // Восстанавливаем оригинальную функцию\n func = originalFunc;\n \n return result;\n };\n \n return memoized;\n}\n\n// Пример с ограничением размера кэша (LRU)\nfunction memoizeWithLRU(func, maxSize = 100) {\n const cache = new Map();\n const keys = [];\n \n return function(...args) {\n const key = JSON.stringify(args);\n \n if (cache.has(key)) {\n // Обновляем порядок использования\n const index = keys.indexOf(key);\n keys.splice(index, 1);\n keys.push(key);\n return cache.get(key);\n }\n \n // Если кэш полон, удаляем самый старый\n if (keys.length >= maxSize) {\n const oldestKey = keys.shift();\n cache.delete(oldestKey);\n }\n \n // Вычисляем и кэшируем\n const result = func.apply(this, args);\n cache.set(key, result);\n keys.push(key);\n \n return result;\n };\n}",
            "hints": [
                "Кэшируйте результаты вычислений",
                "Используйте аргументы как ключ кэша",
                "Проверяйте кэш перед вычислением"
            ],
            "tests": [
                { "code": "const memoized = memoize((a, b) => a + b); [memoized(1, 2), memoized(1, 2)]", "expected": [3, 3] }
            ],
            "chapter": "Часть 9: Практические паттерны"
        },
        {
            "id": 90,
            "title": "Дебаунс и троттлинг",
            "difficulty": "medium",
            "description": "Реализуйте дебаунс и троттлинг для оптимизации событий",
            "initialCode": "function debounce(func, delay) {\n // Реализуйте debounce\n \n}\n\nfunction throttle(func, limit) {\n // Реализуйте throttle\n \n}",
            "solution": "// Дебаунс: выполнение после паузы\nfunction debounce(func, delay, immediate = false) {\n let timeout;\n \n return function(...args) {\n const context = this;\n \n const later = function() {\n timeout = null;\n if (!immediate) {\n func.apply(context, args);\n }\n };\n \n const callNow = immediate && !timeout;\n \n clearTimeout(timeout);\n timeout = setTimeout(later, delay);\n \n if (callNow) {\n func.apply(context, args);\n }\n };\n}\n\n// Троттлинг: выполнение не чаще чем limit\nfunction throttle(func, limit) {\n let inThrottle;\n let lastFunc;\n let lastRan;\n \n return function(...args) {\n const context = this;\n \n if (!inThrottle) {\n func.apply(context, args);\n lastRan = Date.now();\n inThrottle = true;\n } else {\n clearTimeout(lastFunc);\n \n lastFunc = setTimeout(function() {\n if (Date.now() - lastRan >= limit) {\n func.apply(context, args);\n lastRan = Date.now();\n }\n }, limit - (Date.now() - lastRan));\n }\n };\n}\n\n// Упрощенный throttle\nfunction simpleThrottle(func, limit) {\n let lastCall = 0;\n \n return function(...args) {\n const now = Date.now();\n \n if (now - lastCall >= limit) {\n lastCall = now;\n return func.apply(this, args);\n }\n };\n}\n\n// Пример использования\nlet count = 0;\nconst increment = () => count++;\n\nconst debouncedIncrement = debounce(increment, 100);\nconst throttledIncrement = throttle(increment, 100);\n\n// Имитация быстрых вызовов\nfor (let i = 0; i < 10; i++) {\n debouncedIncrement();\n throttledIncrement();\n}\n\nsetTimeout(() => count, 200);",
            "hints": [
                "Debounce: выполнение после паузы в вызовах",
                "Throttle: выполнение не чаще указанного интервала",
                "Используйте setTimeout и clearTimeout"
            ],
            "tests": [
                { "code": "let calls = 0; const fn = () => calls++; const debounced = debounce(fn, 50); debounced(); debounced(); setTimeout(() => calls, 100)", "expected": 0 } // Заглушка
            ],
            "chapter": "Часть 9: Практические паттерны"
        },

        {
            "id": 91,
            "title": "Обработка ошибок с try-catch",
            "difficulty": "easy",
            "description": "Напишите функцию с обработкой ошибок",
            "initialCode": "function safeParseJSON(jsonString) {\n // Обработайте ошибки парсинга JSON\n \n}",
            "solution": "function safeParseJSON(jsonString) {\n try {\n return JSON.parse(jsonString);\n } catch (error) {\n // Логирование ошибки\n console.error('Ошибка парсинга JSON:', error.message);\n \n // Возврат значения по умолчанию\n return null;\n \n // Или повторное выбрасывание с дополнительной информацией\n // throw new Error(`Невалидный JSON: ${error.message}`);\n }\n}",
            "hints": [
                "Используйте try-catch для перехвата ошибок",
                "Логируйте ошибки для отладки",
                "Возвращайте значение по умолчанию или выбрасывайте ошибку"
            ],
            "tests": [
                { "code": "safeParseJSON('{\"name\":\"Иван\"}')", "expected": {name: 'Иван'} },
                { "code": "safeParseJSON('невалидный')", "expected": null }
            ],
            "chapter": "Часть 10: Советы и лучшие практики"
        },
        {
            "id": 92,
            "title": "Валидация входных данных",
            "difficulty": "medium",
            "description": "Напишите функцию валидации пользовательских данных",
            "initialCode": "function validateUserData(data) {\n // Валидируйте данные пользователя\n \n}",
            "solution": "function validateUserData(data) {\n const errors = [];\n \n // Проверка имени\n if (!data.name || typeof data.name !== 'string') {\n errors.push('Имя обязательно и должно быть строкой');\n } else if (data.name.trim().length < 2) {\n errors.push('Имя должно содержать минимум 2 символа');\n } else if (data.name.length > 50) {\n errors.push('Имя слишком длинное (макс. 50 символов)');\n }\n \n // Проверка email\n const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n if (!data.email || !emailRegex.test(data.email)) {\n errors.push('Введите корректный email');\n }\n \n // Проверка возраста\n if (data.age !== undefined) {\n const age = Number(data.age);\n if (isNaN(age) || !Number.isInteger(age)) {\n errors.push('Возраст должен быть целым числом');\n } else if (age < 0 || age > 150) {\n errors.push('Возраст должен быть от 0 до 150');\n }\n }\n \n // Проверка пароля\n if (data.password) {\n if (data.password.length < 8) {\n errors.push('Пароль должен быть минимум 8 символов');\n }\n if (!/[A-Z]/.test(data.password)) {\n errors.push('Пароль должен содержать заглавную букву');\n }\n if (!/[0-9]/.test(data.password)) {\n errors.push('Пароль должен содержать цифру');\n }\n }\n \n return {\n isValid: errors.length === 0,\n errors: errors\n };\n}",
            "hints": [
                "Проверяйте типы данных",
                "Используйте регулярные выражения для сложных проверок",
                "Возвращайте детальную информацию об ошибках"
            ],
            "tests": [
                { "code": "validateUserData({name: 'И', email: 'test'})", "expected": {isValid: false, errors: ['Имя должно содержать минимум 2 символа', 'Введите корректный email']} }
            ],
            "chapter": "Часть 10: Советы и лучшие практики"
        },
        {
            "id": 93,
            "title": "Оптимизация циклов",
            "difficulty": "medium",
            "description": "Оптимизируйте выполнение циклов",
            "initialCode": "function optimizeLoops() {\n const largeArray = Array.from({length: 10000}, (_, i) => i);\n let sum = 0;\n \n // Оптимизируйте цикл\n for (let i = 0; i < largeArray.length; i++) {\n sum += largeArray[i];\n }\n \n return sum;\n}",
            "solution": "function optimizeLoops() {\n const largeArray = Array.from({length: 10000}, (_, i) => i);\n let sum = 0;\n \n // Оптимизация 1: кэширование длины\n const len = largeArray.length;\n for (let i = 0; i < len; i++) {\n sum += largeArray[i];\n }\n \n // Оптимизация 2: обратный цикл (иногда быстрее)\n let sum2 = 0;\n for (let i = largeArray.length - 1; i >= 0; i--) {\n sum2 += largeArray[i];\n }\n \n // Оптимизация 3: while цикл\n let sum3 = 0;\n let j = 0;\n while (j < largeArray.length) {\n sum3 += largeArray[j++];\n }\n \n // Оптимизация 4: встроенные методы (часто быстрее и читаемее)\n const sum4 = largeArray.reduce((acc, val) => acc + val, 0);\n \n // Оптимизация 5: избегайте вложенных циклов, если возможно\n // Используйте Set или Map для O(1) поиска\n \n return [sum, sum2, sum3, sum4];\n}",
            "hints": [
                "Кэшируйте длину массива перед циклом",
                "Рассмотрите обратный цикл",
                "Используйте встроенные методы когда возможно"
            ],
            "tests": [
                { "code": "optimizeLoops()[0]", "expected": 49995000 }
            ],
            "chapter": "Часть 10: Советы и лучшие практики"
        },
        {
            "id": 94,
            "title": "Избегайте мутаций",
            "difficulty": "medium",
            "description": "Напишите иммутабельные функции",
            "initialCode": "// Мутирующая функция (плохо)\nfunction addItemToCart(cart, item) {\n cart.push(item);\n return cart;\n}\n\n// Напишите иммутабельную версию\n ",
            "solution": "// Мутирующая функция (плохо)\nfunction addItemToCart(cart, item) {\n cart.push(item);\n return cart;\n}\n\n// Иммутабельная версия (хорошо)\nfunction addItemToCartImmutable(cart, item) {\n // Возвращаем новый массив\n return [...cart, item];\n}\n\n// Иммутабельное обновление объекта\nfunction updateUserImmutable(user, updates) {\n return {\n ...user, // Копируем все свойства\n ...updates // Перезаписываем обновленными\n };\n}\n\n// Иммутабельное удаление элемента\nfunction removeItemImmutable(cart, itemId) {\n return cart.filter(item => item.id !== itemId);\n}\n\n// Иммутабельное обновление элемента в массиве\nfunction updateItemImmutable(cart, itemId, updates) {\n return cart.map(item => \n item.id === itemId \n ? { ...item, ...updates } // Новый объект с обновлениями\n : item\n );\n}\n\n// Глубокая иммутабельность\nfunction deepUpdateImmutable(obj, path, value) {\n if (path.length === 0) return value;\n \n const [first, ...rest] = path;\n \n if (Array.isArray(obj)) {\n return obj.map((item, index) => \n index === first ? deepUpdateImmutable(item, rest, value) : item\n );\n } else if (typeof obj === 'object' && obj !== null) {\n return {\n ...obj,\n [first]: deepUpdateImmutable(obj[first] || {}, rest, value)\n };\n }\n \n return obj;\n}",
            "hints": [
                "Используйте spread оператор для копирования",
                "Возвращайте новые объекты/массивы",
                "Избегайте мутирующих методов (push, pop, splice)"
            ],
            "tests": [
                { "code": "const cart = [{id: 1}]; const newCart = addItemToCartImmutable(cart, {id: 2}); [cart.length, newCart.length]", "expected": [1, 2] }
            ],
            "chapter": "Часть 10: Советы и лучшие практики"
        },
        {
            "id": 95,
            "title": "Ленивая загрузка (Lazy Loading)",
            "difficulty": "hard",
            "description": "Реализуйте ленивую загрузку для тяжелых модулей",
            "initialCode": "function createLazyLoader() {\n // Реализуйте ленивую загрузку\n \n}",
            "solution": "// Ленивая загрузка модуля\nconst lazyModule = (importFn) => {\n let module = null;\n let loadPromise = null;\n \n return {\n // Загружает модуль при первом вызове\n async load() {\n if (module) return module;\n \n if (!loadPromise) {\n loadPromise = importFn().then(m => {\n module = m;\n return module;\n });\n }\n \n return loadPromise;\n },\n \n // Прокси для доступа к экспортам\n get exports() {\n return new Proxy({}, {\n get(target, prop) {\n if (module && prop in module) {\n return module[prop];\n }\n \n throw new Error(`Свойство ${prop} недоступно до загрузки модуля`);\n }\n });\n }\n };\n};\n\n// Пример использования\nconst heavyMath = lazyModule(() => \n import('./heavy-math.js').catch(() => ({\n add: (a, b) => a + b,\n multiply: (a, b) => a * b\n }))\n);\n\n// Ленивая загрузка изображений\nfunction lazyLoadImages() {\n const images = document.querySelectorAll('img[data-src]');\n \n const observer = new IntersectionObserver((entries) => {\n entries.forEach(entry => {\n if (entry.isIntersecting) {\n const img = entry.target;\n img.src = img.dataset.src;\n img.removeAttribute('data-src');\n observer.unobserve(img);\n }\n });\n }, {\n rootMargin: '50px' // Начинаем загрузку заранее\n });\n \n images.forEach(img => observer.observe(img));\n}\n\n// Ленивая инициализация\nfunction createLazyInitializer(initializer) {\n let initialized = false;\n let value;\n \n return {\n get() {\n if (!initialized) {\n value = initializer();\n initialized = true;\n }\n return value;\n },\n \n set(newValue) {\n value = newValue;\n initialized = true;\n }\n };\n}\n\n// Пример: ленивая инициализация подключения к БД\nconst databaseConnection = createLazyInitializer(() => {\n console.log('Инициализация подключения к БД...');\n return { query: () => 'результат' };\n});",
            "hints": [
                "Загружайте ресурсы только когда нужны",
                "Используйте Proxy для отложенного доступа",
                "IntersectionObserver для ленивой загрузки изображений"
            ],
            "tests": [
                { "code": "const lazy = createLazyInitializer(() => 42); lazy.get()", "expected": 42 }
            ],
            "chapter": "Часть 10: Советы и лучшие практики"
        },
        {
            "id": 96,
            "title": "Кэширование запросов",
            "difficulty": "hard",
            "description": "Реализуйте кэширование для API запросов",
            "initialCode": "function createCachedFetch() {\n // Реализуйте кэширование fetch запросов\n \n}",
            "solution": "function createCachedFetch(cacheTime = 5 * 60 * 1000) { // 5 минут по умолчанию\n const cache = new Map();\n \n return async function cachedFetch(url, options = {}) {\n const cacheKey = JSON.stringify({url, options});\n \n // Проверяем кэш\n const cached = cache.get(cacheKey);\n if (cached) {\n const {data, timestamp} = cached;\n \n // Проверяем свежесть кэша\n if (Date.now() - timestamp < cacheTime) {\n console.log('Возвращаем из кэша:', url);\n return data.clone ? data.clone() : data;\n } else {\n console.log('Кэш устарел:', url);\n cache.delete(cacheKey);\n }\n }\n \n // Выполняем запрос\n console.log('Выполняем запрос:', url);\n const response = await fetch(url, options);\n \n // Клонируем response для кэширования\n const responseToCache = response.clone();\n \n // Кэшируем\n cache.set(cacheKey, {\n data: responseToCache,\n timestamp: Date.now()\n });\n \n // Очистка старых записей\n cleanupCache(cache, cacheTime);\n \n return response;\n };\n}\n\nfunction cleanupCache(cache, cacheTime) {\n const now = Date.now();\n for (const [key, value] of cache.entries()) {\n if (now - value.timestamp > cacheTime * 2) { // Удаляем очень старые\n cache.delete(key);\n }\n }\n}\n\n// Более продвинутая версия с разными стратегиями\nclass FetchCache {\n constructor(strategy = 'time', options = {}) {\n this.cache = new Map();\n this.strategy = strategy;\n this.options = {\n maxSize: 100,\n maxAge: 5 * 60 * 1000, // 5 минут\n ...options\n };\n }\n \n async fetch(url, options = {}) {\n const key = this._createKey(url, options);\n \n // Проверка кэша\n if (this.cache.has(key)) {\n const entry = this.cache.get(key);\n \n if (this._isValid(entry)) {\n this._updateAccess(key);\n return entry.response.clone();\n } else {\n this.cache.delete(key);\n }\n }\n \n // Выполнение запроса\n const response = await fetch(url, options);\n const responseToCache = response.clone();\n \n // Сохранение в кэш\n this._set(key, responseToCache);\n \n return response;\n }\n \n _createKey(url, options) {\n return `${url}:${JSON.stringify(options)}`;\n }\n \n _isValid(entry) {\n const now = Date.now();\n \n if (this.strategy === 'time') {\n return now - entry.timestamp < this.options.maxAge;\n }\n \n return true;\n }\n \n _set(key, response) {\n // LRU eviction\n if (this.cache.size >= this.options.maxSize) {\n const oldestKey = this.cache.keys().next().value;\n this.cache.delete(oldestKey);\n }\n \n this.cache.set(key, {\n response,\n timestamp: Date.now(),\n accessed: Date.now()\n });\n }\n \n _updateAccess(key) {\n const entry = this.cache.get(key);\n if (entry) {\n entry.accessed = Date.now();\n // Перемещаем в конец Map (Map сохраняет порядок вставки)\n this.cache.delete(key);\n this.cache.set(key, entry);\n }\n }\n \n clear() {\n this.cache.clear();\n }\n}",
            "hints": [
                "Кэшируйте response.clone()",
                "Учитывайте время жизни кэша",
                "Реализуйте LRU для ограничения размера"
            ],
            "tests": [
                { "code": "typeof createCachedFetch()", "expected": 'function' }
            ],
            "chapter": "Часть 10: Советы и лучшие практики"
        },
        {
            "id": 97,
            "title": "Безопасность: экранирование HTML",
            "difficulty": "medium",
            "description": "Напишите функцию для безопасного вывода HTML",
            "initialCode": "function escapeHTML(html) {\n // Экранируйте опасные символы HTML\n \n}",
            "solution": "function escapeHTML(html) {\n if (typeof html !== 'string') {\n return String(html);\n }\n \n return html\n .replace(/&/g, '&amp;')\n .replace(/</g, '&lt;')\n .replace(/>/g, '&gt;')\n .replace(/\"/g, '&quot;')\n .replace(/'/g, '&#x27;')\n .replace(/\\//g, '&#x2F;');\n}\n\n// Альтернатива: использование textContent вместо innerHTML\nfunction safeSetElementContent(element, content) {\n if (element.textContent !== undefined) {\n element.textContent = content;\n } else {\n // Для старых браузеров\n element.innerText = content;\n }\n}\n\n// Безопасное создание элементов\nfunction createSafeElement(tag, attributes = {}, text = '') {\n const element = document.createElement(tag);\n \n // Безопасная установка атрибутов\n for (const [key, value] of Object.entries(attributes)) {\n if (key.startsWith('on')) {\n // Не позволяем установить обработчики событий из ненадежных данных\n continue;\n }\n \n if (key === 'href' || key === 'src') {\n // Валидация URL\n const url = String(value);\n if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('/')) {\n continue; // Пропускаем опасные URL\n }\n }\n \n element.setAttribute(key, escapeHTML(value));\n }\n \n // Безопасное добавление текста\n if (text) {\n safeSetElementContent(element, text);\n }\n \n return element;\n}\n\n// Санитизация HTML (разрешает безопасные теги)\nfunction sanitizeHTML(html, allowedTags = ['b', 'i', 'u', 'em', 'strong']) {\n const temp = document.createElement('div');\n temp.innerHTML = html;\n \n // Удаляем опасные теги и атрибуты\n const elements = temp.getElementsByTagName('*');\n for (let i = elements.length - 1; i >= 0; i--) {\n const el = elements[i];\n \n // Проверяем разрешенные теги\n if (!allowedTags.includes(el.tagName.toLowerCase())) {\n el.parentNode.removeChild(el);\n continue;\n }\n \n // Удаляем опасные атрибуты\n for (let j = el.attributes.length - 1; j >= 0; j--) {\n const attr = el.attributes[j];\n if (attr.name.startsWith('on')) {\n el.removeAttribute(attr.name);\n }\n }\n }\n \n return temp.innerHTML;\n}",
            "hints": [
                "Экранируйте &, <, >, \", '",
                "Используйте textContent вместо innerHTML",
                "Валидируйте URL в атрибутах href/src"
            ],
            "tests": [
                { 
                    "code": "escapeHTML('<script>alert(\\\"xss\\\")</script>')", 
                    "expected": "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;" 
                }
            ],
            "chapter": "Часть 10: Советы и лучшие практики"
        },
        {
            "id": 98,
            "title": "Профилирование производительности",
            "difficulty": "hard",
            "description": "Напишите утилиты для профилирования кода",
            "initialCode": "function profilePerformance(func, iterations = 1000) {\n // Измерьте производительность функции\n \n}",
            "solution": "function profilePerformance(func, iterations = 1000, ...args) {\n // Разогрев\n for (let i = 0; i < 10; i++) {\n func(...args);\n }\n \n // Измерение\n const start = performance.now();\n \n for (let i = 0; i < iterations; i++) {\n func(...args);\n }\n \n const end = performance.now();\n const totalTime = end - start;\n const avgTime = totalTime / iterations;\n \n return {\n totalTime: `${totalTime.toFixed(2)}ms`,\n avgTime: `${avgTime.toFixed(4)}ms`,\n iterations,\n opsPerSecond: `${((iterations / totalTime) * 1000).toFixed(0)} ops/sec`\n };\n}\n\n// Профилировщик с памятью\nfunction profileWithMemory(func, ...args) {\n if (typeof performance !== 'undefined' && performance.memory) {\n const startMemory = performance.memory.usedJSHeapSize;\n const startTime = performance.now();\n \n const result = func(...args);\n \n const endTime = performance.now();\n const endMemory = performance.memory.usedJSHeapSize;\n \n return {\n result,\n time: endTime - startTime,\n memoryUsed: endMemory - startMemory,\n memoryUsedMB: ((endMemory - startMemory) / 1024 / 1024).toFixed(2)\n };\n } else {\n // Fallback для браузеров без memory API\n const startTime = performance.now();\n const result = func(...args);\n const endTime = performance.now();\n \n return {\n result,\n time: endTime - startTime\n };\n }\n}\n\n// Сравнение производительности нескольких функций\nfunction comparePerformance(functions, iterations = 1000, ...args) {\n const results = [];\n \n for (const [name, func] of Object.entries(functions)) {\n const profile = profilePerformance(func, iterations, ...args);\n results.push({\n name,\n ...profile\n });\n }\n \n // Сортировка по времени\n results.sort((a, b) => {\n const aTime = parseFloat(a.avgTime);\n const bTime = parseFloat(b.avgTime);\n return aTime - bTime;\n });\n \n return results;\n}\n\n// Бенчмарк с прогресс-баром (для консоли)\nasync function benchmarkWithProgress(func, iterations = 1000, ...args) {\n console.log('Запуск бенчмарка...');\n const results = [];\n \n for (let i = 0; i < iterations; i++) {\n const start = performance.now();\n func(...args);\n const end = performance.now();\n results.push(end - start);\n \n // Прогресс\n if (i % 100 === 0) {\n const progress = ((i / iterations) * 100).toFixed(1);\n console.log(`Прогресс: ${progress}%`);\n }\n }\n \n const stats = {\n min: Math.min(...results),\n max: Math.max(...results),\n avg: results.reduce((a, b) => a + b, 0) / results.length,\n median: results.sort((a, b) => a - b)[Math.floor(results.length / 2)]\n };\n \n console.log('Результаты:', stats);\n return stats;\n}",
            "hints": [
                "Используйте performance.now() для точного измерения",
                "Делайте разогрев перед измерением",
                "Измеряйте память через performance.memory если доступно"
            ],
            "tests": [
                { "code": "profilePerformance(() => Math.sqrt(2), 100).totalTime", "expected": 'string' }
            ],
            "chapter": "Часть 10: Советы и лучшие практики"
        },
        {
            "id": 99,
            "title": "Тестирование кода",
            "difficulty": "medium",
            "description": "Напишите простой фреймворк для тестирования",
            "initialCode": "function createTestSuite() {\n // Создайте простой фреймворк для тестирования\n \n}",
            "solution": "// Простой фреймворк для тестирования\nclass TestSuite {\n constructor() {\n this.tests = [];\n this.results = [];\n this.beforeEachFn = null;\n this.afterEachFn = null;\n }\n \n // Добавление теста\n test(name, fn) {\n this.tests.push({name, fn});\n }\n \n // Хук перед каждым тестом\n beforeEach(fn) {\n this.beforeEachFn = fn;\n }\n \n // Хук после каждого теста\n afterEach(fn) {\n this.afterEachFn = fn;\n }\n \n // Запуск всех тестов\n async run() {\n console.log(`Запуск ${this.tests.length} тестов...`);\n \n for (const test of this.tests) {\n // Выполнение beforeEach\n if (this.beforeEachFn) {\n try {\n this.beforeEachFn();\n } catch (error) {\n console.error(`Ошибка в beforeEach для теста ${test.name}:`, error);\n }\n }\n \n // Выполнение теста\n const start = performance.now();\n let passed = false;\n let error = null;\n \n try {\n await test.fn();\n passed = true;\n } catch (e) {\n error = e;\n passed = false;\n }\n \n const end = performance.now();\n const duration = end - start;\n \n // Сохранение результата\n this.results.push({\n name: test.name,\n passed,\n error,\n duration\n });\n \n // Вывод результата\n const status = passed ? '✅' : '❌';\n console.log(`${status} ${test.name} (${duration.toFixed(2)}ms)`);\n \n if (error) {\n console.error(`  Ошибка: ${error.message}`);\n console.error(error.stack);\n }\n \n // Выполнение afterEach\n if (this.afterEachFn) {\n try {\n this.afterEachFn();\n } catch (e) {\n console.error(`Ошибка в afterEach для теста ${test.name}:`, e);\n }\n }\n }\n \n // Статистика\n const passedCount = this.results.filter(r => r.passed).length;\n const failedCount = this.results.length - passedCount;\n \n console.log(`\\nРезультаты: ${passedCount} пройдено, ${failedCount} не пройдено`);\n \n return {\n passed: failedCount === 0,\n results: this.results\n };\n }\n}\n\n// Утверждения (assertions)\nfunction expect(value) {\n return {\n toBe(expected) {\n if (value !== expected) {\n throw new Error(`Ожидалось ${expected}, получено ${value}`);\n }\n },\n \n toEqual(expected) {\n if (JSON.stringify(value) !== JSON.stringify(expected)) {\n throw new Error(`Ожидалось ${JSON.stringify(expected)}, получено ${JSON.stringify(value)}`);\n }\n },\n \n toBeTruthy() {\n if (!value) {\n throw new Error(`Ожидалось truthy значение, получено ${value}`);\n }\n },\n \n toBeFalsy() {\n if (value) {\n throw new Error(`Ожидалось falsy значение, получено ${value}`);\n }\n },\n \n toThrow(expectedMessage) {\n try {\n value();\n throw new Error('Ожидалось исключение, но его не было');\n } catch (error) {\n if (expectedMessage && !error.message.includes(expectedMessage)) {\n throw new Error(`Ожидалось исключение с сообщением \"${expectedMessage}\", получено \"${error.message}\"`);\n }\n }\n }\n };\n}\n\n// Пример использования\nconst suite = new TestSuite();\n\nsuite.test('Сложение чисел', () => {\n expect(2 + 2).toBe(4);\n});\n\nsuite.test('Массивы', () => {\n expect([1, 2, 3]).toEqual([1, 2, 3]);\n});\n\nsuite.test('Исключения', () => {\n expect(() => { throw new Error('Тестовая ошибка'); }).toThrow('Тестовая');\n});\n\nreturn suite.run();",
            "hints": [
                "Храните тесты в массиве",
                "Используйте try-catch для перехвата ошибок",
                "Реализуйте хуки beforeEach/afterEach"
            ],
            "tests": [
                { "code": "expect(2+2).toBe(4)", "expected": undefined }
            ],
            "chapter": "Часть 10: Советы и лучшие практики"
        },
        {
            "id": 100,
            "title": "Документация JSDoc",
            "difficulty": "easy",
            "description": "Напишите документацию для функции в формате JSDoc",
            "initialCode": "/**\n * Вычисляет площадь круга\n */\nfunction circleArea(radius) {\n return Math.PI * radius * radius;\n}\n\n// Дополните документацию",
            "solution": "/**\n * Вычисляет площадь круга по заданному радиусу\n * \n * @param {number} radius - Радиус круга. Должен быть положительным числом.\n * @returns {number} Площадь круга.\n * @throws {TypeError} Если радиус не является числом.\n * @throws {RangeError} Если радиус отрицательный.\n * \n * @example\n * // Возвращает 78.53981633974483\n * circleArea(5);\n * \n * @example\n * // Выбрасывает RangeError\n * circleArea(-1);\n */\nfunction circleArea(radius) {\n if (typeof radius !== 'number') {\n throw new TypeError('Радиус должен быть числом');\n }\n \n if (radius < 0) {\n throw new RangeError('Радиус не может быть отрицательным');\n }\n \n return Math.PI * radius * radius;\n}\n\n/**\n * Класс для работы с пользователями\n * @class\n */\nclass User {\n /**\n * Создает нового пользователя\n * @constructor\n * @param {string} name - Имя пользователя\n * @param {number} age - Возраст пользователя\n * @param {Object} [options] - Дополнительные опции\n * @param {string} [options.email] - Email пользователя\n * @param {string[]} [options.roles=[]] - Роли пользователя\n */\n constructor(name, age, options = {}) {\n this.name = name;\n this.age = age;\n this.email = options.email || '';\n this.roles = options.roles || [];\n }\n \n /**\n * Проверяет, является ли пользователь взрослым\n * @returns {boolean} true если возраст >= 18\n */\n isAdult() {\n return this.age >= 18;\n }\n \n /**\n * Добавляет роль пользователю\n * @param {string} role - Название роли\n * @returns {User} this для чейнинга\n * @chainable\n */\n addRole(role) {\n if (!this.roles.includes(role)) {\n this.roles.push(role);\n }\n return this;\n }\n}\n\n/**\n * Тип для пользовательских данных\n * @typedef {Object} UserData\n * @property {string} name - Имя пользователя\n * @property {number} age - Возраст\n * @property {string} [email] - Email (опционально)\n */\n\n/**\n * Создает пользователя из данных\n * @param {UserData} data - Данные пользователя\n * @returns {User} Новый пользователь\n */\nfunction createUserFromData(data) {\n return new User(data.name, data.age, {email: data.email});\n}",
            "hints": [
                "@param описывает параметры",
                "@returns описывает возвращаемое значение",
                "@throws описывает возможные исключения",
                "@example показывает примеры использования"
            ],
            "tests": [
                { "code": "circleArea(5).toFixed(2)", "expected": '78.54' }
            ],
            "chapter": "Часть 10: Советы и лучшие практики"
        },

        {
            "id": 101,
            "title": "Базовые типы TypeScript",
            "difficulty": "easy",
            "description": "Определите типы для переменных",
            "initialCode": "// Определите типы для переменных\nlet age;\nlet name;\nlet isStudent;\nlet scores;\nlet user;",
            "solution": "// Базовые типы TypeScript\nlet age: number = 25;\nlet name: string = 'Иван';\nlet isStudent: boolean = true;\nlet scores: number[] = [90, 85, 95];\nlet user: {name: string, age: number} = {name: 'Анна', age: 30};\n\n// Другие типы\nlet nothing: null = null;\nlet notDefined: undefined = undefined;\nlet id: string | number = 'abc123'; // Union type\nid = 123; // Можно присвоить число\n\n// Tuple\nlet person: [string, number] = ['Иван', 25];\n// person[0] = 30; // Ошибка: должно быть string\n\n// Enum\nenum Color {\n Red = 'RED',\n Green = 'GREEN',\n Blue = 'BLUE'\n}\nlet favoriteColor: Color = Color.Red;\n\n// Any (избегайте)\nlet anything: any = 'может быть чем угодно';\nanything = 42;\nanything = true;\n\n// Unknown (безопасный any)\nlet unknownValue: unknown = 'неизвестно';\n// unknownValue.toUpperCase(); // Ошибка: нужно проверить тип\nif (typeof unknownValue === 'string') {\n console.log(unknownValue.toUpperCase()); // OK\n}\n\n// Never\nfunction throwError(message: string): never {\n throw new Error(message);\n}\n\n// Void\nfunction logMessage(message: string): void {\n console.log(message);\n}\n\nreturn [typeof age, typeof name, typeof isStudent, scores.length, user.name];",
            "hints": [
                "number для чисел",
                "string для строк",
                "boolean для true/false",
                "Type[] для массивов",
                "{prop: type} для объектов"
            ],
            "tests": [
                { "code": "let age: number = 25; typeof age", "expected": 'number' }
            ],
            "chapter": "Часть 11: TypeScript"
        },
        {
            "id": 102,
            "title": "Интерфейсы TypeScript",
            "difficulty": "medium",
            "description": "Создайте интерфейсы для объектов",
            "initialCode": "// Создайте интерфейс User\n \n \nconst user: User = {\n name: 'Иван',\n age: 25,\n email: 'ivan@example.com'\n};\n\nreturn user.name;",
            "solution": "// Базовый интерфейс\ninterface User {\n name: string;\n age: number;\n email?: string; // Опциональное свойство\n readonly id: number; // Только для чтения\n}\n\n// Использование интерфейса\nconst user: User = {\n name: 'Иван',\n age: 25,\n email: 'ivan@example.com',\n id: 1\n};\n\n// user.id = 2; // Ошибка: readonly\n\n// Интерфейс с методами\ninterface Person {\n name: string;\n age: number;\n \n // Метод\n greet(): string;\n \n // Метод с параметром\n say(message: string): void;\n}\n\nconst person: Person = {\n name: 'Анна',\n age: 30,\n greet() {\n return `Привет, я ${this.name}`;\n },\n say(message: string) {\n console.log(`${this.name} говорит: ${message}`);\n }\n};\n\n// Наследование интерфейсов\ninterface Employee extends Person {\n employeeId: number;\n department: string;\n \n // Переопределение метода\n greet(): string; // Может возвращать более конкретный тип\n}\n\nconst employee: Employee = {\n name: 'Петр',\n age: 35,\n employeeId: 123,\n department: 'IT',\n greet() {\n return `Привет, я ${this.name} из отдела ${this.department}`;\n },\n say(message: string) {\n console.log(`Сотрудник говорит: ${message}`);\n }\n};\n\n// Интерфейс для функции\ninterface MathOperation {\n (x: number, y: number): number;\n}\n\nconst add: MathOperation = (a, b) => a + b;\nconst multiply: MathOperation = (a, b) => a * b;\n\n// Интерфейс для индексируемых типов\ninterface StringArray {\n [index: number]: string;\n}\n\nconst names: StringArray = ['Иван', 'Анна', 'Петр'];\n// names[0] = 123; // Ошибка: должно быть string\n\nreturn [user.name, person.greet(), employee.greet(), add(2, 3)];",
            "hints": [
                "interface определяет структуру объекта",
                "? делает свойство опциональным",
                "readonly запрещает изменение",
                "extends создает наследование"
            ],
            "tests": [
                { "code": "interface User {name: string}; const user: User = {name: 'Иван'}; user.name", "expected": 'Иван' }
            ],
            "chapter": "Часть 11: TypeScript"
        },
        {
            "id": 103,
            "title": "Классы в TypeScript",
            "difficulty": "medium",
            "description": "Создайте классы с типами",
            "initialCode": "class Person {\n // Добавьте типы и модификаторы доступа\n \n constructor(name, age) {\n \n }\n \n greet() {\n \n }\n}",
            "solution": "class Person {\n // Публичные свойства (по умолчанию)\n name: string;\n age: number;\n \n // Приватное свойство\n private ssn: string;\n \n // Защищенное свойство (доступно в наследниках)\n protected nickname: string;\n \n // Статическое свойство\n static species: string = 'Homo sapiens';\n \n // Свойство только для чтения\n readonly id: number;\n \n constructor(name: string, age: number, ssn: string) {\n this.name = name;\n this.age = age;\n this.ssn = ssn;\n this.nickname = name.toLowerCase();\n this.id = Math.random();\n }\n \n // Публичный метод\n greet(): string {\n return `Привет, я ${this.name}, мне ${this.age} лет`;\n }\n \n // Приватный метод\n private getFormattedSSN(): string {\n return `XXX-XX-${this.ssn.slice(-4)}`;\n }\n \n // Защищенный метод\n protected getNickname(): string {\n return this.nickname;\n }\n \n // Статический метод\n static getSpecies(): string {\n return this.species;\n }\n \n // Геттер\n get formattedSSN(): string {\n return this.getFormattedSSN();\n }\n \n // Сеттер\n set newNickname(value: string) {\n if (value.length < 2) {\n throw new Error('Никнейм слишком короткий');\n }\n this.nickname = value;\n }\n}\n\n// Наследование\nclass Employee extends Person {\n employeeId: number;\n department: string;\n \n constructor(\n name: string, \n age: number, \n ssn: string,\n employeeId: number,\n department: string\n ) {\n // Вызов родительского конструктора\n super(name, age, ssn);\n this.employeeId = employeeId;\n this.department = department;\n }\n \n // Переопределение метода\n greet(): string {\n // Вызов родительского метода\n const parentGreeting = super.greet();\n return `${parentGreeting}, работаю в отделе ${this.department}`;\n }\n \n // Метод с доступом к protected свойству\n getEmployeeNickname(): string {\n return `Сотрудник: ${this.getNickname()}`; // Доступно т.к. protected\n // this.ssn // Ошибка: private\n }\n}\n\n// Абстрактный класс\nabstract class Shape {\n constructor(public color: string) {}\n \n // Абстрактный метод (должен быть реализован в наследниках)\n abstract getArea(): number;\n \n // Конкретный метод\n getColor(): string {\n return this.color;\n }\n}\n\nclass Circle extends Shape {\n constructor(color: string, public radius: number) {\n super(color);\n }\n \n // Реализация абстрактного метода\n getArea(): number {\n return Math.PI * this.radius * this.radius;\n }\n}\n\nconst person = new Person('Иван', 25, '123-45-6789');\nconst employee = new Employee('Анна', 30, '987-65-4321', 123, 'IT');\nconst circle = new Circle('red', 5);\n\nreturn [\n person.greet(),\n employee.greet(),\n employee.getEmployeeNickname(),\n Person.species,\n circle.getArea().toFixed(2)\n];",
            "hints": [
                "private: доступ только внутри класса",
                "protected: доступ в классе и наследниках",
                "public: доступ везде (по умолчанию)",
                "abstract: должен быть реализован в наследниках"
            ],
            "tests": [
                { "code": "class Test {name: string = 'test'}; new Test().name", "expected": 'test' }
            ],
            "chapter": "Часть 11: TypeScript"
        },
        {
            "id": 104,
            "title": "Generics в TypeScript",
            "difficulty": "hard",
            "description": "Используйте generics для обобщенных типов",
            "initialCode": "// Создайте generic функцию\nfunction identity(arg) {\n return arg;\n}\n\n// Создайте generic класс\n ",
            "solution": "// Generic функция\nfunction identity<T>(arg: T): T {\n return arg;\n}\n\n// Использование с явным указанием типа\nconst str = identity<string>('текст'); // string\nconst num = identity<number>(42); // number\n\n// Использование с выводом типа\nconst inferredStr = identity('текст'); // string\nconst inferredNum = identity(42); // number\n\n// Generic с несколькими параметрами\nfunction pair<K, V>(key: K, value: V): [K, V] {\n return [key, value];\n}\n\nconst stringNumberPair = pair<string, number>('age', 25); // [string, number]\nconst numberBooleanPair = pair(1, true); // [number, boolean] (вывод типа)\n\n// Generic класс\nclass Box<T> {\n private value: T;\n \n constructor(value: T) {\n this.value = value;\n }\n \n getValue(): T {\n return this.value;\n }\n \n setValue(value: T): void {\n this.value = value;\n }\n}\n\nconst numberBox = new Box<number>(10);\nconst stringBox = new Box('текст'); // Вывод типа: Box<string>\n\n// Ограничения generic (constraints)\ninterface HasLength {\n length: number;\n}\n\nfunction logLength<T extends HasLength>(arg: T): T {\n console.log(`Длина: ${arg.length}`);\n return arg;\n}\n\nlogLength('строка'); // OK, строка имеет length\nlogLength([1, 2, 3]); // OK, массив имеет length\n// logLength(42); // Ошибка: число не имеет length\n\n// Generic с ключами объекта\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n return obj[key];\n}\n\nconst person = {name: 'Иван', age: 25};\nconst name = getProperty(person, 'name'); // string\nconst age = getProperty(person, 'age'); // number\n// const unknown = getProperty(person, 'email'); // Ошибка: 'email' не существует\n\n// Generic интерфейсы\ninterface Repository<T> {\n findById(id: number): T | null;\n save(entity: T): T;\n delete(id: number): boolean;\n findAll(): T[];\n}\n\nclass UserRepository implements Repository<User> {\n findById(id: number): User | null {\n return null; // Реализация\n }\n \n save(user: User): User {\n return user; // Реализация\n }\n \n delete(id: number): boolean {\n return true; // Реализация\n }\n \n findAll(): User[] {\n return []; // Реализация\n }\n}\n\n// Utility types\ninterface User {\n id: number;\n name: string;\n age: number;\n email?: string;\n}\n\n// Partial: все свойства опциональны\ntype PartialUser = Partial<User>;\nconst partialUser: PartialUser = {name: 'Иван'}; // OK\n\n// Readonly: все свойства только для чтения\ntype ReadonlyUser = Readonly<User>;\nconst readonlyUser: ReadonlyUser = {id: 1, name: 'Иван', age: 25};\n// readonlyUser.name = 'Петр'; // Ошибка\n\n// Pick: выбирает конкретные свойства\ntype UserNameAndAge = Pick<User, 'name' | 'age'>;\nconst nameAndAge: UserNameAndAge = {name: 'Иван', age: 25};\n\n// Omit: исключает свойства\ntype UserWithoutEmail = Omit<User, 'email'>;\nconst userWithoutEmail: UserWithoutEmail = {id: 1, name: 'Иван', age: 25};\n\nreturn [\n identity('test'),\n pair('key', 'value'),\n numberBox.getValue(),\n name\n];",
            "hints": [
                "<T> определяет generic параметр",
                "extends добавляет ограничения",
                "keyof получает ключи типа",
                "T[K] получает тип свойства"
            ],
            "tests": [
                { "code": "function identity<T>(x: T): T { return x; } identity(5)", "expected": 5 }
            ],
            "chapter": "Часть 11: TypeScript"
        },
        {
            "id": 105,
            "title": "Типы для функций в TypeScript",
            "difficulty": "medium",
            "description": "Определите типы для функций",
            "initialCode": "// Определите типы для функций\nfunction add(a, b) {\n return a + b;\n}\n\nconst multiply = (a, b) => a * b;\n\n// Тип для функции обратного вызова\n ",
            "solution": "// Явное указание типов параметров и возвращаемого значения\nfunction add(a: number, b: number): number {\n return a + b;\n}\n\n// Стрелочная функция с типами\nconst multiply = (a: number, b: number): number => a * b;\n\n// Функция с опциональным параметром\nfunction greet(name: string, greeting?: string): string {\n return `${greeting || 'Привет'}, ${name}!`;\n}\n\n// Функция с параметром по умолчанию\nfunction createUser(name: string, age: number = 18): {name: string, age: number} {\n return {name, age};\n}\n\n// Функция с rest параметрами\nfunction sum(...numbers: number[]): number {\n return numbers.reduce((total, num) => total + num, 0);\n}\n\n// Тип для функции\ntype MathOperation = (x: number, y: number) => number;\n\nconst divide: MathOperation = (a, b) => a / b;\n\n// Функция, возвращающая функцию\nfunction createMultiplier(factor: number): MathOperation {\n return (x) => x * factor;\n}\n\nconst double = createMultiplier(2);\nconst triple = createMultiplier(3);\n\n// Перегрузки функций (function overloads)\nfunction processInput(input: string): string;\nfunction processInput(input: number): number;\nfunction processInput(input: string | number): string | number {\n if (typeof input === 'string') {\n return input.toUpperCase();\n }\n return input * input;\n}\n\n// Тип для функции обратного вызова\ntype Callback<T> = (error: Error | null, result: T) => void;\n\nfunction fetchData(callback: Callback<string>): void {\n setTimeout(() => {\n callback(null, 'данные');\n }, 100);\n}\n\n// Асинхронная функция\nasync function fetchUser(id: number): Promise<{id: number, name: string}> {\n return new Promise(resolve => {\n setTimeout(() => {\n resolve({id, name: 'Иван'});\n }, 100);\n });\n}\n\n// Функция с this параметром\ninterface Counter {\n count: number;\n increment(): void;\n}\n\nfunction createCounter(): Counter {\n return {\n count: 0,\n increment(this: Counter) {\n this.count++;\n }\n };\n}\n\n// Функция-конструктор\ntype Constructor<T> = new (...args: any[]) => T;\n\nclass Animal {\n constructor(public name: string) {}\n}\n\nfunction createAnimal(ctor: Constructor<Animal>, name: string): Animal {\n return new ctor(name);\n}\n\nconst animal = createAnimal(Animal, 'Кот');\n\nreturn [\n add(2, 3),\n multiply(4, 5),\n greet('Иван'),\n sum(1, 2, 3),\n double(5),\n processInput('hello'),\n processInput(5)\n];",
            "hints": [
                "function name(param: type): returnType",
                "(param: type) => returnType для стрелочных функций",
                "type Name = (params) => returnType для типов функций",
                "async function(): Promise<type> для асинхронных функций"
            ],
            "tests": [
                { "code": "function add(a: number, b: number): number { return a + b; } add(2, 3)", "expected": 5 }
            ],
            "chapter": "Часть 11: TypeScript"
        },
        {
            "id": 106,
            "title": "Утилитарные типы TypeScript",
            "difficulty": "hard",
            "description": "Используйте утилитарные типы",
            "initialCode": "interface User {\n id: number;\n name: string;\n age: number;\n email?: string;\n}\n\n// Создайте типы с помощью utility types\n ",
            "solution": "interface User {\n id: number;\n name: string;\n age: number;\n email?: string;\n address?: {\n city: string;\n street: string;\n };\n}\n\n// 1. Partial<T> - все свойства становятся опциональными\ntype PartialUser = Partial<User>;\nconst partialUser: PartialUser = {\n name: 'Иван' // Можно задать только name\n};\n\n// 2. Required<T> - все свойства становятся обязательными\ntype RequiredUser = Required<User>;\nconst requiredUser: RequiredUser = {\n id: 1,\n name: 'Иван',\n age: 25,\n email: 'ivan@example.com',\n address: {city: 'Москва', street: 'Ленина'}\n};\n\n// 3. Readonly<T> - все свойства только для чтения\ntype ReadonlyUser = Readonly<User>;\nconst readonlyUser: ReadonlyUser = {\n id: 1,\n name: 'Иван',\n age: 25\n};\n// readonlyUser.name = 'Петр'; // Ошибка\n\n// 4. Record<K, T> - создает тип с ключами K и значениями T\ntype UserRoles = Record<string, string[]>;\nconst roles: UserRoles = {\n admin: ['read', 'write', 'delete'],\n user: ['read']\n};\n\ntype UserDictionary = Record<number, User>;\nconst usersById: UserDictionary = {\n 1: {id: 1, name: 'Иван', age: 25},\n 2: {id: 2, name: 'Анна', age: 30}\n};\n\n// 5. Pick<T, K> - выбирает свойства K из T\ntype UserNameAndAge = Pick<User, 'name' | 'age'>;\nconst nameAndAge: UserNameAndAge = {\n name: 'Иван',\n age: 25\n};\n\n// 6. Omit<T, K> - исключает свойства K из T\ntype UserWithoutId = Omit<User, 'id'>;\nconst userWithoutId: UserWithoutId = {\n name: 'Иван',\n age: 25,\n email: 'ivan@example.com'\n};\n\n// 7. Exclude<T, U> - исключает из T типы, которые можно присвоить U\ntype AllowedTypes = string | number | boolean;\ntype OnlyStrings = Exclude<AllowedTypes, number | boolean>; // string\n\n// 8. Extract<T, U> - извлекает из T типы, которые можно присвоить U\ntype PossibleTypes = string | number | User;\ntype OnlyObjects = Extract<PossibleTypes, object>; // User\n\n// 9. NonNullable<T> - удаляет null и undefined из T\ntype MaybeString = string | null | undefined;\ntype DefinitelyString = NonNullable<MaybeString>; // string\n\n// 10. Parameters<T> - получает типы параметров функции\ntype Func = (a: number, b: string) => boolean;\ntype FuncParams = Parameters<Func>; // [number, string]\n\n// 11. ReturnType<T> - получает тип возвращаемого значения\ntype FuncReturn = ReturnType<Func>; // boolean\n\n// 12. ConstructorParameters<T> - параметры конструктора класса\ntype AnimalConstructorParams = ConstructorParameters<typeof Animal>; // [string]\n\n// 13. InstanceType<T> - тип экземпляра класса\ntype AnimalInstance = InstanceType<typeof Animal>; // Animal\n\n// 14. ThisParameterType<T> - тип this параметра\nfunction sayHello(this: User) {\n return `Привет, я ${this.name}`;\n}\ntype ThisType = ThisParameterType<typeof sayHello>; // User\n\n// 15. OmitThisParameter<T> - удаляет this параметр\ntype WithoutThis = OmitThisParameter<typeof sayHello>; // () => string\n\n// 16. ThisType<T> - задает тип this в объекте\ninterface UserMethods {\n getName(): string;\n}\n\ntype UserWithMethods = User & ThisType<UserMethods>;\n\nconst userWithMethods: UserWithMethods = {\n id: 1,\n name: 'Иван',\n age: 25,\n getName() {\n return this.name; // this имеет тип UserMethods & User\n }\n};\n\n// Собственные utility types\ntype Nullable<T> = T | null | undefined;\ntype Maybe<T> = T | undefined;\ntype ValueOf<T> = T[keyof T];\n\ntype UserValues = ValueOf<User>; // number | string | {city: string, street: string} | undefined\n\n// Conditional types\ntype IsString<T> = T extends string ? true : false;\ntype A = IsString<string>; // true\ntype B = IsString<number>; // false\n\ntype ArrayElement<T> = T extends (infer U)[] ? U : never;\ntype Element = ArrayElement<string[]>; // string\ntype Element2 = ArrayElement<User[]>; // User\n\ntype PromiseValue<T> = T extends Promise<infer U> ? U : never;\ntype Value = PromiseValue<Promise<string>>; // string\n\n// Mapped types\ntype Optionalize<T> = {\n [K in keyof T]?: T[K];\n};\n\ntype Readonlyify<T> = {\n readonly [K in keyof T]: T[K];\n};\n\ntype Getters<T> = {\n [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];\n};\n\ntype UserGetters = Getters<UserNameAndAge>;\n// {\n// getName: () => string;\n// getAge: () => number;\n// }\n\nreturn [\n partialUser.name,\n requiredUser.name,\n nameAndAge.name,\n userWithoutId.name\n];",
            "hints": [
                "Partial делает все свойства опциональными",
                "Required делает все свойства обязательными",
                "Pick выбирает конкретные свойства",
                "Omit исключает свойства"
            ],
            "tests": [
                { "code": "type Test = Partial<{a: number}>; const obj: Test = {}; typeof obj", "expected": 'object' }
            ],
            "chapter": "Часть 11: TypeScript"
        },
        {
            "id": 107,
            "title": "Декораторы в TypeScript",
            "difficulty": "hard",
            "description": "Используйте декораторы для метапрограммирования",
            "initialCode": "// Создайте декораторы для классов и методов\n ",
            "solution": "// Декоратор класса\nfunction sealed(constructor: Function) {\n Object.seal(constructor);\n Object.seal(constructor.prototype);\n}\n\n// Декоратор класса с параметрами\nfunction logger(prefix: string) {\n return function(constructor: Function) {\n console.log(`${prefix}: ${constructor.name} создан`);\n };\n}\n\n// Декоратор метода\nfunction enumerable(value: boolean) {\n return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n descriptor.enumerable = value;\n };\n}\n\n// Декоратор свойства\nfunction format(formatString: string) {\n return function(target: any, propertyKey: string) {\n let value = target[propertyKey];\n \n const getter = function() {\n return value;\n };\n \n const setter = function(newVal: any) {\n value = `${formatString} ${newVal}`;\n };\n \n Object.defineProperty(target, propertyKey, {\n get: getter,\n set: setter,\n enumerable: true,\n configurable: true\n });\n };\n}\n\n// Декоратор параметра\nfunction validate(min: number, max: number) {\n return function(target: any, propertyKey: string, parameterIndex: number) {\n // Сохраняем метаданные валидации\n const existingValidations = Reflect.getOwnMetadata('validations', target, propertyKey) || [];\n existingValidations.push({\n parameterIndex,\n min,\n max\n });\n Reflect.defineMetadata('validations', existingValidations, target, propertyKey);\n };\n}\n\n// Декоратор доступа\nfunction configurable(value: boolean) {\n return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n descriptor.configurable = value;\n };\n}\n\n// Декоратор фабрика для отслеживания вызовов\nfunction trackCalls() {\n return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n const originalMethod = descriptor.value;\n let callCount = 0;\n \n descriptor.value = function(...args: any[]) {\n callCount++;\n console.log(`Метод ${propertyKey} вызван ${callCount} раз`);\n return originalMethod.apply(this, args);\n };\n \n // Добавляем метод для получения счетчика\n descriptor.value.getCallCount = () => callCount;\n \n return descriptor;\n };\n}\n\n// Применение декораторов\n@logger('Класс')\n@sealed\nclass Person {\n @format('Господин')\n name: string;\n \n private _age: number;\n \n constructor(name: string, @validate(0, 150) age: number) {\n this.name = name;\n this._age = age;\n }\n \n @enumerable(false)\n @trackCalls()\n greet(@validate(1, 10) times: number = 1): string {\n return `Привет, я ${this.name}! `.repeat(times).trim();\n }\n \n @configurable(false)\n get age(): number {\n return this._age;\n }\n \n set age(value: number) {\n if (value < 0 || value > 150) {\n throw new Error('Некорректный возраст');\n }\n this._age = value;\n }\n \n // Статический метод с декоратором\n @trackCalls()\n static create(name: string, age: number): Person {\n return new Person(name, age);\n }\n}\n\n// Декоратор для внедрения зависимости\nfunction inject(service: string) {\n return function(target: any, propertyKey: string) {\n // В реальном приложении здесь была бы логика DI\n let value: any;\n \n const getter = function() {\n if (!value) {\n // Создание сервиса\n switch(service) {\n case 'Logger':\n value = {\n log: (msg: string) => console.log(msg)\n };\n break;\n case 'ApiService':\n value = {\n fetch: () => Promise.resolve('данные')\n };\n break;\n }\n }\n return value;\n };\n \n Object.defineProperty(target, propertyKey, {\n get: getter,\n enumerable: true,\n configurable: true\n });\n };\n}\n\nclass UserController {\n @inject('Logger')\n private logger: any;\n \n @inject('ApiService')\n private api: any;\n \n async getUsers() {\n this.logger.log('Запрос пользователей');\n const data = await this.api.fetch();\n return data;\n }\n}\n\n// Экспериментальные декораторы (нужна настройка в tsconfig.json)\n// {\n// \"experimentalDecorators\": true,\n// \"emitDecoratorMetadata\": true\n// }\n\nconst person = new Person('Иван', 25);\nperson.greet();\nperson.greet();\n\nconst greetMethod = person.greet as any;\nconst callCount = greetMethod.getCallCount ? greetMethod.getCallCount() : 0;\n\nreturn [\n person.name,\n person.greet(2),\n callCount\n];",
            "hints": [
                "Декоратор класса получает конструктор",
                "Декоратор метода получает target, propertyKey, descriptor",
                "Декоратор свойства получает target, propertyKey",
                "Декоратор параметра получает target, propertyKey, parameterIndex"
            ],
            "tests": [
                { "code": "function testDecorator(target: any) { target.decorated = true; } @testDecorator class Test {} (Test as any).decorated", "expected": true }
            ],
            "chapter": "Часть 11: TypeScript"
        },
        {
            "id": 108,
            "title": "Продвинутые типы TypeScript",
            "difficulty": "hard",
            "description": "Используйте продвинутые типы",
            "initialCode": "// Используйте conditional types, mapped types, template literal types\n ",
            "solution": "// 1. Conditional Types (Условные типы)\ntype IsArray<T> = T extends any[] ? true : false;\n\ntype A = IsArray<number[]>; // true\ntype B = IsArray<string>; // false\n\n// Distributive conditional types\ntype ToArray<T> = T extends any ? T[] : never;\ntype StrOrNumArray = ToArray<string | number>; // string[] | number[]\n\n// Infer keyword\ntype ElementType<T> = T extends (infer U)[] ? U : T;\ntype E1 = ElementType<string[]>; // string\ntype E2 = ElementType<number>; // number\n\ntype ReturnType2<T> = T extends (...args: any[]) => infer R ? R : any;\ntype R1 = ReturnType2<() => string>; // string\ntype R2 = ReturnType2<(x: number) => number>; // number\n\n// 2. Mapped Types (Отображаемые типы)\ntype Readonly2<T> = {\n readonly [K in keyof T]: T[K];\n};\n\ntype Optional2<T> = {\n [K in keyof T]?: T[K];\n};\n\n// Modifiers: + и -\ntype Concrete2<T> = {\n -readonly [K in keyof T]: T[K];\n};\n\ntype Required2<T> = {\n [K in keyof T]-?: T[K];\n};\n\n// Key remapping\ntype Getters2<T> = {\n [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];\n};\n\ninterface User2 {\n name: string;\n age: number;\n}\n\ntype UserGetters2 = Getters2<User2>;\n// {\n// getName: () => string;\n// getAge: () => number;\n// }\n\n// Фильтрация ключей\ntype MethodsOnly<T> = {\n [K in keyof T as T[K] extends Function ? K : never]: T[K];\n};\n\n// 3. Template Literal Types (Типы шаблонных литералов)\ntype EventName = 'click' | 'hover' | 'drag';\ntype HandlerName = `on${Capitalize<EventName>}`;\n// 'onClick' | 'onHover' | 'onDrag'\n\ntype GetterName<T extends string> = `get${Capitalize<T>}`;\ntype SetterName<T extends string> = `set${Capitalize<T>}`;\n\ntype Name = 'name' | 'age';\ntype NameAccessors = GetterName<Name> | SetterName<Name>;\n// 'getName' | 'getAge' | 'setName' | 'setAge'\n\n// Интеллектуальные строковые типы\ntype CSSUnits = 'px' | 'em' | 'rem' | '%';\ntype CSSProperty = `margin${Capitalize<CSSUnits>}` | `padding${Capitalize<CSSUnits>}`;\n// 'marginPx' | 'marginEm' | 'marginRem' | 'margin%' | 'paddingPx' | ...\n\n// 4. Recursive Types (Рекурсивные типы)\ntype Json = \n | string\n | number\n | boolean\n | null\n | Json[]\n | {[key: string]: Json};\n\nconst json: Json = {\n name: 'Иван',\n age: 25,\n tags: ['admin', 'user'],\n metadata: {\n created: '2024-01-01',\n active: true\n }\n};\n\n// 5. Branded Types (Брендированные типы)\ntype UserId = number & { readonly brand: unique symbol };\ntype ProductId = number & { readonly brand: unique symbol };\n\nfunction createUserId(id: number): UserId {\n return id as UserId;\n}\n\nfunction createProductId(id: number): ProductId {\n return id as ProductId;\n}\n\nconst userId = createUserId(1);\nconst productId = createProductId(1);\n\n// userId === productId // Ошибка типов, хотя оба number\n\n// 6. Type Guards (Защитники типов)\nfunction isString(value: any): value is string {\n return typeof value === 'string';\n}\n\nfunction process(value: string | number) {\n if (isString(value)) {\n // TypeScript знает, что value - string\n return value.toUpperCase();\n } else {\n // TypeScript знает, что value - number\n return value.toFixed(2);\n }\n}\n\n// 7. Assertion Functions (Функции утверждения)\nfunction assertIsString(value: any): asserts value is string {\n if (typeof value !== 'string') {\n throw new Error('Значение не является строкой');\n }\n}\n\nfunction assert(condition: any, msg?: string): asserts condition {\n if (!condition) {\n throw new Error(msg);\n }\n}\n\n// 8. Indexed Access Types (Типы доступа по индексу)\ntype User3 = {\n id: number;\n name: string;\n address: {\n city: string;\n street: string;\n };\n};\n\ntype UserIdType = User3['id']; // number\ntype UserAddress = User3['address']; // {city: string; street: string}\ntype UserAddressCity = User3['address']['city']; // string\n\n// Все значения\ntype UserValues3 = User3[keyof User3]; // number | string | {city: string; street: string}\n\n// 9. Const Assertions (Константные утверждения)\nconst colors = ['red', 'green', 'blue'] as const;\ntype Color = typeof colors[number]; // 'red' | 'green' | 'blue'\n\nconst user = {\n name: 'Иван',\n age: 25\n} as const;\n// user.name = 'Петр'; // Ошибка: readonly\n\ntype ReadonlyUser = typeof user;\n// {\n// readonly name: 'Иван';\n// readonly age: 25;\n// }\n\n// 10. Satisfies Operator (Оператор satisfies)\nconst config = {\n port: 3000,\n host: 'localhost',\n retry: true\n} satisfies {\n port: number;\n host: string;\n retry?: boolean;\n};\n\n// config.port.toFixed(); // OK\n// config.host.toUpperCase(); // OK\n// config.unknown; // Ошибка\n\nreturn [\n process('hello'),\n process(3.14159),\n colors.join(', '),\n config.port\n];",
            "hints": [
                "T extends U ? X : Y для условных типов",
                "[K in keyof T] для mapped types",
                "`text${T}` для template literal types",
                "as const для константных утверждений"
            ],
            "tests": [
                { "code": "type Test<T> = T extends string ? 'string' : 'not string'; type R = Test<'hello'>", "expected": 'string' }
            ],
            "chapter": "Часть 11: TypeScript"
        },
        {
            "id": 109,
            "title": "TypeScript с библиотеками",
            "difficulty": "hard",
            "description": "Используйте TypeScript с внешними библиотеками",
            "initialCode": "// Определите типы для работы с DOM API\n// Определите типы для fetch API\n ",
            "solution": "// 1. Типы для DOM API\n// TypeScript включает типы для DOM из коробки\n\n// Элементы\nconst div: HTMLDivElement = document.createElement('div');\nconst input: HTMLInputElement = document.createElement('input');\nconst button: HTMLButtonElement = document.createElement('button');\nconst form: HTMLFormElement = document.createElement('form');\n\n// События\nbutton.addEventListener('click', (event: MouseEvent) => {\n console.log(event.clientX, event.clientY);\n});\n\ninput.addEventListener('input', (event: Event) => {\n const target = event.target as HTMLInputElement;\n console.log(target.value);\n});\n\nform.addEventListener('submit', (event: SubmitEvent) => {\n event.preventDefault();\n // Обработка формы\n});\n\n// 2. Типы для Fetch API\nasync function fetchWithTypes<T>(url: string, options?: RequestInit): Promise<T> {\n const response = await fetch(url, options);\n \n if (!response.ok) {\n throw new Error(`HTTP error ${response.status}: ${response.statusText}`);\n }\n \n return response.json() as Promise<T>;\n}\n\n// Использование с типами\ninterface User {\n id: number;\n name: string;\n email: string;\n}\n\ninterface Post {\n id: number;\n title: string;\n body: string;\n userId: number;\n}\n\nasync function getUsers(): Promise<User[]> {\n return fetchWithTypes<User[]>('https://jsonplaceholder.typicode.com/users');\n}\n\nasync function createUser(user: Omit<User, 'id'>): Promise<User> {\n return fetchWithTypes<User>('https://jsonplaceholder.typicode.com/users', {\n method: 'POST',\n headers: {\n 'Content-Type': 'application/json'\n },\n body: JSON.stringify(user)\n });\n}\n\n// 3. Типы для localStorage\nfunction saveToLocalStorage<T>(key: string, value: T): void {\n localStorage.setItem(key, JSON.stringify(value));\n}\n\nfunction loadFromLocalStorage<T>(key: string, defaultValue: T): T {\n const item = localStorage.getItem(key);\n if (item === null) {\n return defaultValue;\n }\n \n try {\n return JSON.parse(item) as T;\n } catch {\n return defaultValue;\n }\n}\n\n// 4. Типы для setTimeout/setInterval\nlet timeoutId: number;\nlet intervalId: number;\n\nfunction startTimer(callback: () => void, delay: number): number {\n timeoutId = setTimeout(callback, delay);\n return timeoutId;\n}\n\nfunction startInterval(callback: () => void, interval: number): number {\n intervalId = setInterval(callback, interval);\n return intervalId;\n}\n\n// 5. Типы для Web Workers\n// worker.ts\ndeclare function postMessage(message: any): void;\n\n// main.ts\nconst worker = new Worker('worker.js');\n\nworker.onmessage = (event: MessageEvent) => {\n const data = event.data;\n console.log('Получено от worker:', data);\n};\n\nworker.postMessage({type: 'start', data: [1, 2, 3]});\n\n// 6. Типы для Geolocation API\nfunction getCurrentPosition(): Promise<GeolocationPosition> {\n return new Promise((resolve, reject) => {\n if (!navigator.geolocation) {\n reject(new Error('Geolocation не поддерживается'));\n return;\n }\n \n navigator.geolocation.getCurrentPosition(resolve, reject);\n });\n}\n\n// 7. Типы для Canvas API\nfunction drawOnCanvas(canvas: HTMLCanvasElement) {\n const ctx = canvas.getContext('2d');\n \n if (!ctx) {\n throw new Error('Canvas context не доступен');\n }\n \n // TypeScript знает типы для CanvasRenderingContext2D\n ctx.fillStyle = 'red';\n ctx.fillRect(10, 10, 100, 100);\n \n ctx.beginPath();\n ctx.arc(200, 200, 50, 0, Math.PI * 2);\n ctx.stroke();\n \n // Градиенты\n const gradient = ctx.createLinearGradient(0, 0, 200, 0);\n gradient.addColorStop(0, 'red');\n gradient.addColorStop(1, 'blue');\n ctx.fillStyle = gradient;\n ctx.fillRect(300, 10, 200, 100);\n}\n\n// 8. Типы для Audio API\nfunction playAudio(url: string): HTMLAudioElement {\n const audio = new Audio(url);\n audio.play();\n \n audio.addEventListener('ended', () => {\n console.log('Аудио завершено');\n });\n \n return audio;\n}\n\n// 9. Типы для Drag and Drop API\nfunction makeDraggable(element: HTMLElement) {\n element.draggable = true;\n \n element.addEventListener('dragstart', (event: DragEvent) => {\n if (!event.dataTransfer) return;\n event.dataTransfer.setData('text/plain', element.id);\n });\n}\n\nfunction makeDropzone(element: HTMLElement) {\n element.addEventListener('dragover', (event: DragEvent) => {\n event.preventDefault();\n });\n \n element.addEventListener('drop', (event: DragEvent) => {\n event.preventDefault();\n if (!event.dataTransfer) return;\n \n const data = event.dataTransfer.getData('text/plain');\n console.log('Перетащено:', data);\n });\n}\n\n// 10. Типы для Intersection Observer API\nfunction createObserver(element: Element, callback: IntersectionObserverCallback) {\n const observer = new IntersectionObserver(callback, {\n threshold: 0.5\n });\n \n observer.observe(element);\n return observer;\n}\n\n// 11. Типы для Resize Observer API\nfunction observeResize(element: Element, callback: ResizeObserverCallback) {\n const observer = new ResizeObserver(callback);\n observer.observe(element);\n return observer;\n}\n\n// 12. Типы для Mutation Observer API\nfunction observeMutations(element: Node, callback: MutationCallback) {\n const observer = new MutationObserver(callback);\n observer.observe(element, {\n childList: true,\n attributes: true,\n subtree: true\n });\n return observer;\n}\n\n// 13. Типы для Performance API\nfunction measurePerformance(name: string, callback: () => void) {\n performance.mark(`${name}-start`);\n callback();\n performance.mark(`${name}-end`);\n \n performance.measure(name, `${name}-start`, `${name}-end`);\n \n const measure = performance.getEntriesByName(name)[0];\n console.log(`${name}: ${measure.duration.toFixed(2)}ms`);\n}\n\n// 14. Собственные декларации типов\n// types.d.ts\ndeclare module 'my-library' {\n export function myFunction(): string;\n export const myConstant: number;\n export interface MyInterface {\n prop: string;\n }\n}\n\n// Использование\n// import { myFunction } from 'my-library';\n\n// 15. Глобальные декларации\ndeclare global {\n interface Window {\n myGlobalFunction: () => void;\n }\n \n interface Document {\n myDocumentMethod: () => string;\n }\n}\n\n// Теперь TypeScript знает об этих расширениях\n// window.myGlobalFunction = () => console.log('Hello');\n// document.myDocumentMethod = () => 'Hello';\n\nreturn 'TypeScript с библиотеками готов';",
            "hints": [
                "TypeScript включает типы для DOM API",
                "Используйте generics для fetch: Promise<T>",
                "Создавайте декларации типов для внешних библиотек",
                "declare global для расширения глобальных типов"
            ],
            "tests": [
                { "code": "const div: HTMLDivElement = document.createElement('div'); div.tagName", "expected": 'DIV' }
            ],
            "chapter": "Часть 11: TypeScript"
        },
        {
            "id": 110,
            "title": "Миграция JS проекта на TypeScript",
            "difficulty": "hard",
            "description": "Напишите скрипт миграции JS кода на TypeScript",
            "initialCode": "// JavaScript код\nfunction calculateTotal(items) {\n return items.reduce((total, item) => total + item.price, 0);\n}\n\nfunction getUserById(id, users) {\n return users.find(user => user.id === id);\n}\n\n// Конвертируйте в TypeScript\n ",
            "solution": "// 1. Начало миграции\n// tsconfig.json\n{\n \"compilerOptions\": {\n \"target\": \"ES2020\",\n \"module\": \"ESNext\",\n \"lib\": [\"ES2020\", \"DOM\"],\n \"strict\": true,\n \"esModuleInterop\": true,\n \"skipLibCheck\": true,\n \"forceConsistentCasingInFileNames\": true,\n \"outDir\": \"./dist\",\n \"rootDir\": \"./src\"\n },\n \"include\": [\"src/**/*\"],\n \"exclude\": [\"node_modules\", \"dist\"]\n}\n\n// 2. Переименование файлов .js -> .ts\n// calculator.js -> calculator.ts\n// Перемещение в src/\n\n// 3. Постепенная миграция с any\n// Первый шаг: добавление any для быстрой компиляции\n\n// Исходный JavaScript\nfunction calculateTotal(items) {\n return items.reduce((total, item) => total + item.price, 0);\n}\n\n// TypeScript с any\nfunction calculateTotalAny(items: any[]): any {\n return items.reduce((total: any, item: any) => total + item.price, 0);\n}\n\n// 4. Постепенная типизация\ninterface Item {\n id: number;\n name: string;\n price: number;\n category?: string; // Опциональное свойство\n}\n\nfunction calculateTotalTyped(items: Item[]): number {\n return items.reduce((total, item) => total + item.price, 0);\n}\n\n// 5. Типизация функции с параметрами\ninterface User {\n id: number;\n name: string;\n email: string;\n age?: number;\n}\n\nfunction getUserById(id: number, users: User[]): User | undefined {\n return users.find(user => user.id === id);\n}\n\n// 6. Типизация классов\nclass ShoppingCart {\n private items: Item[] = [];\n \n addItem(item: Item): void {\n this.items.push(item);\n }\n \n removeItem(itemId: number): void {\n this.items = this.items.filter(item => item.id !== itemId);\n }\n \n getTotal(): number {\n return calculateTotalTyped(this.items);\n }\n \n getItems(): Item[] {\n return [...this.items]; // Возвращаем копию\n }\n}\n\n// 7. Типизация асинхронных функций\nasync function fetchProducts(): Promise<Item[]> {\n try {\n const response = await fetch('/api/products');\n if (!response.ok) {\n throw new Error(`HTTP error ${response.status}`);\n }\n return await response.json();\n } catch (error) {\n console.error('Ошибка загрузки продуктов:', error);\n return [];\n }\n}\n\n// 8. Типизация событий DOM\nfunction setupEventListeners() {\n const button = document.getElementById('buy-button');\n const input = document.getElementById('quantity-input') as HTMLInputElement;\n \n if (!button || !input) return;\n \n button.addEventListener('click', (event: MouseEvent) => {\n event.preventDefault();\n \n const quantity = parseInt(input.value, 10);\n if (isNaN(quantity) || quantity <= 0) {\n alert('Введите корректное количество');\n return;\n }\n \n buyProduct(quantity);\n });\n}\n\nfunction buyProduct(quantity: number): void {\n console.log(`Покупка ${quantity} товаров`);\n}\n\n// 9. Типизация утилитарных функций\nfunction debounce<T extends (...args: any[]) => any>(\n func: T,\n delay: number\n): (...args: Parameters<T>) => void {\n let timeoutId: number;\n \n return function(...args: Parameters<T>) {\n clearTimeout(timeoutId);\n timeoutId = setTimeout(() => func.apply(this, args), delay);\n };\n}\n\n// 10. Типизация конфигурации\ninterface AppConfig {\n apiUrl: string;\n timeout: number;\n retryAttempts: number;\n features: {\n darkMode: boolean;\n notifications: boolean;\n };\n}\n\nconst config: AppConfig = {\n apiUrl: 'https://api.example.com',\n timeout: 5000,\n retryAttempts: 3,\n features: {\n darkMode: true,\n notifications: false\n }\n};\n\n// 11. Типизация с discriminated unions\ntype Notification = \n | { type: 'success'; message: string; duration?: number }\n | { type: 'error'; message: string; code: number }\n | { type: 'info'; message: string; icon: string };\n\nfunction showNotification(notification: Notification): void {\n switch (notification.type) {\n case 'success':\n console.log(`✅ ${notification.message}`);\n break;\n case 'error':\n console.log(`❌ ${notification.message} (код: ${notification.code})`);\n break;\n case 'info':\n console.log(`ℹ️ ${notification.message}`);\n break;\n }\n}\n\n// 12. Типизация с enum\nenum UserRole {\n Admin = 'admin',\n Editor = 'editor',\n Viewer = 'viewer'\n}\n\ninterface UserWithRole extends User {\n role: UserRole;\n permissions: string[];\n}\n\n// 13. Экспорт/импорт типов\n// types.ts\nexport interface Product {\n id: number;\n name: string;\n price: number;\n}\n\nexport type DiscountCode = string;\n\nexport { User, Item };\n\n// app.ts\nimport { Product, DiscountCode, User } from './types';\n\n// 14. Утилиты для миграции\nfunction assertNever(value: never): never {\n throw new Error(`Неожиданное значение: ${value}`);\n}\n\nfunction safeParseJSON<T>(json: string, defaultValue: T): T {\n try {\n return JSON.parse(json) as T;\n } catch {\n return defaultValue;\n }\n}\n\n// 15. Скрипт миграции\n// package.json\n{\n \"scripts\": {\n \"migrate\": \"npx @typescript-eslint/parser --fix\",\n \"type-check\": \"tsc --noEmit\",\n \"build\": \"tsc\",\n \"dev\": \"tsc --watch\"\n }\n}\n\n// Миграция:\n// 1. Установить TypeScript: npm install -D typescript\n// 2. Создать tsconfig.json\n// 3. Переименовать .js -> .ts\n// 4. Добавить базовые типы с any\n// 5. Постепенно заменять any конкретными типами\n// 6. Включить strict mode\n// 7. Добавить проверки типов в CI/CD\n\nreturn {\n calculateTotal: calculateTotalTyped,\n getUserById,\n cart: new ShoppingCart(),\n config\n};",
            "hints": [
                "Начните с any и постепенно заменяйте конкретными типами",
                "Создайте интерфейсы для основных структур данных",
                "Используйте strict mode для максимальной безопасности типов",
                "Экспортируйте типы для повторного использования"
            ],
            "tests": [
                { "code": "interface Item {price: number}; function calculateTotal(items: Item[]): number { return items.reduce((t, i) => t + i.price, 0); } calculateTotal([{price: 10}, {price: 20}])", "expected": 30 }
            ],
            "chapter": "Часть 11: TypeScript"
        }
    ]
};