const QUESTIONS_DATA = {
    "tasks": [
        {
            "id": 1,
            "title": "Сумма двух чисел",
            "difficulty": "easy",
            "description": "Напишите функцию sum, которая принимает два числа и возвращает их сумму.\n\nПример: sum(2, 3) должно вернуть 5",
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
            "title": "Объявление переменных: var, let, const",
            "difficulty": "easy",
            "description": "Объявите три переменные:\n1. С помощью var (глобальная переменная)\n2. С помощью let (изменяемая переменная)\n3. С помощью const (константа)\n\nЗатем измените значение переменной let и верните массив со всеми значениями.",
            "initialCode": "function declareVariables() {\n // 1. Объявите переменную с помощью var и назовите её globalVar\n // 2. Объявите переменную с помощью let и назовите её mutableVar\n // 3. Объявите переменную с помощью const и назовите её constantVar\n // 4. Измените значение mutableVar на 'измененная'\n // 5. Верните массив [globalVar, mutableVar, constantVar]\n \n}",
            "solution": "function declareVariables() {\n var globalVar = 'глобальная';\n let mutableVar = 'изменяемая';\n const constantVar = 'константа';\n \n mutableVar = 'измененная';\n // constantVar = 'новая' // Вызовет ошибку, так как const нельзя переприсвоить\n \n return [globalVar, mutableVar, constantVar];\n}",
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
            "title": "Определение типов данных",
            "difficulty": "easy",
            "description": "Создайте переменные разных типов данных и верните массив с их типами (используя оператор typeof).\n\nСоздайте переменные следующих типов: строка, число, булево значение, undefined, null, Symbol, BigInt, объект, массив, функция.",
            "initialCode": "function checkTypes() {\n // Создайте переменные разных типов данных\n // Верните массив с их типами через typeof\n \n}",
            "solution": "function checkTypes() {\n const str = 'строка';\n const num = 42;\n const bool = true;\n const undef = undefined;\n const nul = null;\n const sym = Symbol('id');\n const big = 123n;\n const obj = {};\n const arr = [];\n const func = function() {};\n \n const types = [\n typeof str, typeof num, typeof bool, typeof undef,\n typeof nul, typeof sym, typeof big, typeof obj,\n typeof arr, typeof func\n ];\n \n return types;\n}",
            "hints": [
                "Используйте typeof для определения типа",
                "Обратите внимание: typeof null возвращает 'object'",
                "Массивы и функции - тоже объекты"
            ],
            "tests": [
                { "code": "checkTypes()", "expected": ['string', 'number', 'boolean', 'undefined', 'object', 'symbol', 'bigint', 'object', 'object', 'function'] }
            ],
            "chapter": "Часть 1: Фундамент"
        },
        {
            "id": 4,
            "title": "Преобразование типов данных",
            "difficulty": "medium",
            "description": "Напишите функцию, которая преобразует:\n1. Строку '123' в число\n2. Число 456 в строку\n3. Булево значение true в число\n\nВерните массив с результатами преобразований.",
            "initialCode": "function convertTypes() {\n const strNum = '123';\n const num = 456;\n const bool = true;\n \n // Преобразуйте типы:\n // 1. strNum в число\n // 2. num в строку\n // 3. bool в число\n \n return [numFromStr, strFromNum, numFromBool];\n}",
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
            "title": "Решение проблемы точности чисел с плавающей точкой",
            "difficulty": "medium",
            "description": "В JavaScript 0.1 + 0.2 не равно 0.3 из-за проблем с точностью. Напишите функцию, которая правильно вычисляет 0.1 + 0.2.\n\nПример: функция должна вернуть 0.3 (не 0.30000000000000004).",
            "initialCode": "function fixPrecision() {\n const a = 0.1;\n const b = 0.2;\n // Решите проблему точности так, чтобы a + b равнялось 0.3\n \n return result;\n}",
            "solution": "function fixPrecision() {\n const a = 0.1;\n const b = 0.2;\n // Решение проблемы точности\n const result = (a * 10 + b * 10) / 10;\n // Или: const result = parseFloat((a + b).toFixed(1));\n \n return result;\n}",
            "hints": [
                "Умножьте числа на 10, сложите, затем разделите на 10",
                "Можно использовать toFixed(), но он вернет строку",
                "parseFloat() преобразует строку в число"
            ],
            "tests": [
                { "code": "fixPrecision()", "expected": 0.3 }
            ],
            "chapter": "Часть 1: Фундамент"
        },
        {
            "id": 6,
            "title": "Работа с большими числами (BigInt)",
            "difficulty": "easy",
            "description": "Используйте BigInt для работы с очень большими числами. Дано большое число 9007199254740991n. Выполните:\n1. Увеличьте его на 1\n2. Умножьте на 2\n\nВерните массив с результатами.",
            "initialCode": "function bigIntOperations() {\n const huge = 9007199254740991n;\n // Выполните операции с BigInt:\n // 1. huge + 1\n // 2. huge * 2\n \n return [incremented, doubled];\n}",
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
            "title": "Операции со строками",
            "difficulty": "easy",
            "description": "Напишите функцию, которая принимает имя и возраст, и выполняет:\n1. Создает приветствие в формате 'Привет, [имя]! Тебе [возраст] лет.' (используйте шаблонные строки)\n2. Преобразует имя в верхний регистр\n3. Проверяет, содержит ли приветствие слово 'Привет'\n\nВерните массив с результатами.",
            "initialCode": "function stringOperations(name, age) {\n // 1. Используйте шаблонные строки для создания приветствия\n // 2. Преобразуйте имя в верхний регистр\n // 3. Проверьте, содержит ли приветствие слово 'Привет'\n \n return [greeting, upperName, includesTest];\n}",
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
            "title": "Строгое и нестрогое сравнение",
            "difficulty": "easy",
            "description": "Продемонстрируйте разницу между == (нестрогое сравнение) и === (строгое сравнение).\n\nСравните:\n1. Число 5 и строку '5' с помощью ==\n2. Число 5 и строку '5' с помощью ===\n3. Число 5 и число 5 с помощью ===\n\nВерните массив с результатами сравнений.",
            "initialCode": "function strictComparison() {\n const a = 5;\n const b = '5';\n const c = 5;\n \n // Сравните значения:\n // 1. a == b (нестрогое сравнение)\n // 2. a === b (строгое сравнение)\n // 3. a === c (строгое сравнение)\n \n return [looseEq, strictEq, strictEq2];\n}",
            "solution": "function strictComparison() {\n const a = 5;\n const b = '5';\n const c = 5;\n \n // Сравните значения\n const looseEq = a == b; // true (приведение типов)\n const strictEq = a === b; // false (разные типы)\n const strictEq2 = a === c; // true (одинаковые значения и типы)\n \n return [looseEq, strictEq, strictEq2];\n}",
            "hints": [
                "== выполняет приведение типов перед сравнением",
                "=== проверяет и значение, и тип",
                "Всегда используйте === если не требуется явное приведение"
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
            "description": "Используйте логические операторы для:\n1. Установки значения по умолчанию для имени, если оно пустое\n2. Проверки, что возраст находится в диапазоне от 18 до 65 включительно\n\nВерните массив [defaultName, isWorkingAge].",
            "initialCode": "function logicalOperators(name, age) {\n // 1. Если name пустое (false), используйте 'Гость' как значение по умолчанию\n // 2. Проверьте, что age находится между 18 и 65 (включительно)\n \n return [defaultName, isWorkingAge];\n}",
            "solution": "function logicalOperators(name, age) {\n // Установите значение по умолчанию для name\n const defaultName = name || 'Гость';\n // Проверьте, что age между 18 и 65\n const isWorkingAge = age >= 18 && age <= 65;\n \n return [defaultName, isWorkingAge];\n}",
            "hints": [
                "|| возвращает первое truthy значение",
                "&& возвращает true только если оба выражения true",
                "Используйте >= и <= для проверки диапазона"
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
            "description": "Используйте тернарный оператор для проверки возраста. Если возраст 18 и больше, верните 'совершеннолетний', иначе верните 'несовершеннолетний'.",
            "initialCode": "function ternaryOperator(age) {\n // Используйте тернарный оператор для проверки возраста\n // Если age >= 18, верните 'совершеннолетний', иначе 'несовершеннолетний'\n \n return status;\n}",
            "solution": "function ternaryOperator(age) {\n // Используйте тернарный оператор\n const status = age >= 18 ? 'совершеннолетний' : 'несовершеннолетний';\n \n return status;\n}",
            "hints": [
                "Синтаксис: условие ? значение_если_true : значение_если_false",
                "Если условие true - возвращает первое значение",
                "Если условие false - возвращает второе значение"
            ],
            "tests": [
                { "code": "ternaryOperator(20)", "expected": 'совершеннолетний' },
                { "code": "ternaryOperator(16)", "expected": 'несовершеннолетний' }
            ],
            "chapter": "Часть 1: Фундамент"
        },
        {
            "id": 11,
            "title": "Проверка числа: положительное, отрицательное или ноль",
            "difficulty": "easy",
            "description": "Напишите функцию checkNumber, которая принимает число и возвращает:\n- 'положительное', если число больше 0\n- 'отрицательное', если число меньше 0\n- 'ноль', если число равно 0\n\nИспользуйте if-else.",
            "initialCode": "function checkNumber(num) {\n // Используйте if-else для проверки числа\n // Если num > 0, верните 'положительное'\n // Иначе если num < 0, верните 'отрицательное'\n // Иначе верните 'ноль'\n \n}",
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
            "title": "Определение типа дня недели",
            "difficulty": "easy",
            "description": "Используйте switch для определения типа дня недели. Функция принимает название дня и возвращает:\n- 'рабочий' для понедельника-пятницы\n- 'выходной' для субботы и воскресенья\n- 'неизвестный день' для других значений\n\nУчтите, что название дня может быть в любом регистре.",
            "initialCode": "function dayType(day) {\n // Используйте switch для определения типа дня\n // Приведите day к нижнему регистру для единообразия\n \n}",
            "solution": "function dayType(day) {\n switch(day.toLowerCase()) {\n case 'понедельник':\n case 'вторник':\n case 'среда':\n case 'четверг':\n case 'пятница':\n return 'рабочий';\n case 'суббота':\n case 'воскресенье':\n return 'выходной';\n default:\n return 'неизвестный день';\n }\n}",
            "hints": [
                "Используйте toLowerCase() для приведения к нижнему регистру",
                "Группируйте несколько case без break между ними",
                "Не забудьте default для обработки неизвестных значений"
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
            "title": "Сумма чисел от 1 до n",
            "difficulty": "easy",
            "description": "Используйте цикл for для вычисления суммы всех чисел от 1 до n включительно.\n\nПример: для n=5 сумма будет 1+2+3+4+5 = 15.",
            "initialCode": "function sumToN(n) {\n let sum = 0;\n // Используйте цикл for для суммирования чисел от 1 до n\n \n return sum;\n}",
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
            "title": "Вычисление факториала с помощью while",
            "difficulty": "medium",
            "description": "Вычислите факториал числа n с помощью цикла while.\nФакториал n (обозначается n!) - произведение всех положительных целых чисел от 1 до n.\n\nПример: 5! = 1*2*3*4*5 = 120.\nЕсли n < 0, верните null.",
            "initialCode": "function factorialWhile(n) {\n if (n < 0) return null;\n let result = 1;\n // Используйте цикл while для вычисления факториала\n \n return result;\n}",
            "solution": "function factorialWhile(n) {\n if (n < 0) return null;\n let result = 1;\n let i = 1;\n \n while(i <= n) {\n result *= i;\n i++;\n }\n \n return result;\n}",
            "hints": [
                "Инициализируйте счетчик i = 1",
                "Умножайте result на i на каждой итерации",
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
            "title": "Генерация случайных чисел до выполнения условия",
            "difficulty": "medium",
            "description": "Используйте цикл do-while для генерации случайных чисел. Генерируйте числа с помощью Math.random() (возвращает число от 0 до 1) до тех пор, пока не получите число больше 0.5.\n\nВерните количество попыток, которое потребовалось.",
            "initialCode": "function generateUntilHalf() {\n let randomNum;\n let attempts = 0;\n // Используйте do-while для генерации чисел\n // Генерируйте пока randomNum <= 0.5\n \n return attempts;\n}",
            "solution": "function generateUntilHalf() {\n let randomNum;\n let attempts = 0;\n \n do {\n randomNum = Math.random(); // 0-1\n attempts++;\n } while(randomNum <= 0.5);\n \n return attempts;\n}",
            "hints": [
                "Math.random() возвращает случайное число от 0 до 1",
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
            "title": "Поиск максимального числа в массиве",
            "difficulty": "easy",
            "description": "Используйте цикл for...of для поиска максимального числа в массиве.\n\nЕсли массив пустой, верните null.",
            "initialCode": "function findMaxForOf(arr) {\n if (arr.length === 0) return null;\n let max = arr[0];\n // Используйте for...of для перебора массива\n // Сравнивайте каждый элемент с max\n \n return max;\n}",
            "solution": "function findMaxForOf(arr) {\n if (arr.length === 0) return null;\n let max = arr[0];\n \n for(const num of arr) {\n if (num > max) {\n max = num;\n }\n }\n \n return max;\n}",
            "hints": [
                "for...of перебирает значения массива",
                "Сравнивайте текущее значение с max",
                "Обновляйте max если нашли большее значение"
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
            "title": "Сумма числовых значений объекта",
            "difficulty": "medium",
            "description": "Используйте цикл for...in для подсчета суммы всех числовых значений в объекте.\n\nПример: для объекта {a: 1, b: 2, c: 3} сумма будет 6.",
            "initialCode": "function sumObjectValues(obj) {\n let sum = 0;\n // Используйте for...in для перебора ключей объекта\n // Складывайте только числовые значения\n \n return sum;\n}",
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
            "title": "Поиск первого четного числа в массиве",
            "difficulty": "medium",
            "description": "Найдите первое четное число в массиве. Используйте цикл и прервите его как только найдете четное число.\n\nЕсли четных чисел нет, верните null.",
            "initialCode": "function findFirstEven(arr) {\n // Используйте цикл для поиска первого четного числа\n // Как только найдете - верните его\n // Если не найдете - верните null\n \n}",
            "solution": "function findFirstEven(arr) {\n for(let i = 0; i < arr.length; i++) {\n if (arr[i] % 2 === 0) {\n return arr[i];\n }\n }\n return null;\n}",
            "hints": [
                "Проверяйте остаток от деления на 2",
                "Используйте return для немедленного выхода из функции",
                "Или используйте break чтобы прервать цикл"
            ],
            "tests": [
                { "code": "findFirstEven([1, 3, 5, 2, 7, 4])", "expected": 2 },
                { "code": "findFirstEven([1, 3, 5])", "expected": null }
            ],
            "chapter": "Часть 2: Управление потоком выполнения"
        },
        {
            "id": 19,
            "title": "Создание таблицы умножения",
            "difficulty": "medium",
            "description": "Создайте матрицу умножения (таблицу Пифагора) размером n×n.\n\nПример для n=3:\n[[1, 2, 3],\n [2, 4, 6],\n [3, 6, 9]]",
            "initialCode": "function multiplicationTable(n) {\n const table = [];\n // Используйте вложенные циклы для создания таблицы\n // Каждый элемент table[i][j] = (i+1) * (j+1)\n \n return table;\n}",
            "solution": "function multiplicationTable(n) {\n const table = [];\n \n for(let i = 1; i <= n; i++) {\n const row = [];\n for(let j = 1; j <= n; j++) {\n row.push(i * j);\n }\n table.push(row);\n }\n \n return table;\n}",
            "hints": [
                "Внешний цикл для строк (i от 1 до n)",
                "Внутренний цикл для столбцов (j от 1 до n)",
                "Умножайте номер строки на номер столбца"
            ],
            "tests": [
                { "code": "multiplicationTable(3)", "expected": [[1, 2, 3], [2, 4, 6], [3, 6, 9]] }
            ],
            "chapter": "Часть 2: Управление потоком выполнения"
        },
        {
            "id": 20,
            "title": "Проверка пароля с ранним возвратом",
            "difficulty": "medium",
            "description": "Используйте early return (ранний возврат) для проверки пароля. Проверьте:\n1. Пароль не пустой\n2. Длина не менее 8 символов\n3. Содержит хотя бы одну заглавную букву\n4. Содержит хотя бы одну цифру\n\nПри первой же ошибке возвращайте сообщение об ошибке.",
            "initialCode": "function checkPassword(password) {\n // Используйте early return для проверки пароля\n // Проверяйте условия по очереди\n \n}",
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
            "title": "Базовые операции с массивами",
            "difficulty": "easy",
            "description": "Выполните базовые операции с массивом [1, 2, 3]:\n1. Добавьте 4 в конец (push)\n2. Удалите последний элемент (pop)\n3. Добавьте 0 в начало (unshift)\n4. Удалите первый элемент (shift)\n\nВерните итоговый массив.",
            "initialCode": "function arrayBasics() {\n const arr = [1, 2, 3];\n // Выполните операции с массивом:\n // 1. Добавьте 4 в конец\n // 2. Удалите последний элемент\n // 3. Добавьте 0 в начало\n // 4. Удалите первый элемент\n \n return arr;\n}",
            "solution": "function arrayBasics() {\n const arr = [1, 2, 3];\n \n // Добавить в конец\n arr.push(4);\n // Удалить с конца\n arr.pop();\n // Добавить в начало\n arr.unshift(0);\n // Удалить с начала\n arr.shift();\n \n return arr;\n}",
            "hints": [
                "push добавляет элемент в конец массива",
                "pop удаляет последний элемент",
                "unshift добавляет элемент в начало",
                "shift удаляет первый элемент"
            ],
            "tests": [
                { "code": "arrayBasics()", "expected": [1, 2, 3] }
            ],
            "chapter": "Часть 3: Структуры данных"
        },
        {
            "id": 22,
            "title": "Преобразование массива чисел в их квадраты",
            "difficulty": "easy",
            "description": "Используйте метод map для преобразования массива чисел в массив их квадратов.\n\nПример: [1, 2, 3, 4] → [1, 4, 9, 16]",
            "initialCode": "function squareNumbers(arr) {\n // Используйте метод map\n // Верните новый массив с квадратами чисел\n \n}",
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
            "title": "Фильтрация чисел больше 10",
            "difficulty": "easy",
            "description": "Используйте метод filter для отбора чисел больше 10 из массива.\n\nПример: [5, 12, 8, 15, 3] → [12, 15]",
            "initialCode": "function filterGreaterThan10(arr) {\n // Используйте метод filter\n // Верните новый массив с числами > 10\n \n}",
            "solution": "function filterGreaterThan10(arr) {\n return arr.filter(num => num > 10);\n}",
            "hints": [
                "filter возвращает новый массив с элементами, удовлетворяющими условию",
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
            "title": "Вычисление среднего значения массива",
            "difficulty": "medium",
            "description": "Используйте метод reduce для вычисления среднего значения массива чисел.\n\nЕсли массив пустой, верните 0.",
            "initialCode": "function calculateAverage(arr) {\n // Используйте reduce для вычисления суммы\n // Затем разделите сумму на количество элементов\n \n}",
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
            "title": "Разница между slice и splice",
            "difficulty": "medium",
            "description": "Продемонстрируйте разницу между методами slice и splice.\n\nИспользуйте два одинаковых массива [1, 2, 3, 4, 5]:\n1. Для первого массива используйте slice(1, 4)\n2. Для второго массива используйте splice(1, 3)\n\nВерните массив с результатами и исходными массивами.",
            "initialCode": "function sliceVsSplice() {\n const arr1 = [1, 2, 3, 4, 5];\n const arr2 = [1, 2, 3, 4, 5];\n \n // Используйте slice и splice\n // sliceResult = arr1.slice(1, 4)\n // spliceResult = arr2.splice(1, 3)\n \n return [sliceResult, spliceResult, arr1, arr2];\n}",
            "solution": "function sliceVsSplice() {\n const arr1 = [1, 2, 3, 4, 5];\n const arr2 = [1, 2, 3, 4, 5];\n \n // slice не изменяет оригинальный массив\n const sliceResult = arr1.slice(1, 4); // [2, 3, 4]\n \n // splice изменяет оригинальный массив\n const spliceResult = arr2.splice(1, 3); // [2, 3, 4]\n \n return [sliceResult, spliceResult, arr1, arr2];\n}",
            "hints": [
                "slice возвращает часть массива, не изменяя оригинал",
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
            "title": "Создание и доступ к объекту",
            "difficulty": "easy",
            "description": "Создайте объект пользователя со свойствами:\n- name: 'Иван'\n- email: 'ivan@example.com'\n- age: 25\n- 'phone number': '+79123456789' (свойство с пробелом)\n\nПолучите доступ к свойствам разными способами и верните массив [name, email, age].",
            "initialCode": "function createUser() {\n // Создайте объект пользователя\n // Получите доступ к свойствам:\n // name через точку\n // email через квадратные скобки\n // age через точку\n \n return [name, email, age];\n}",
            "solution": "function createUser() {\n // Создайте объект пользователя\n const user = {\n name: 'Иван',\n email: 'ivan@example.com',\n age: 25,\n 'phone number': '+79123456789' // свойство с пробелом\n };\n \n // Доступ к свойствам\n const name = user.name;\n const email = user['email'];\n const age = user.age;\n \n return [name, email, age];\n}",
            "hints": [
                "Используйте {} для создания объекта",
                "Доступ через точку для простых свойств",
                "Доступ через [] для свойств с пробелами или динамических имен"
            ],
            "tests": [
                { "code": "createUser()", "expected": ['Иван', 'ivan@example.com', 25] }
            ],
            "chapter": "Часть 3: Структуры данных"
        },
        {
            "id": 27,
            "title": "Добавление метода к объекту",
            "difficulty": "easy",
            "description": "Создайте объект person со свойствами name и age, и добавьте метод getInfo, который возвращает строку в формате 'Имя: [name], Возраст: [age]'.\n\nИспользуйте ключевое слово this для доступа к свойствам объекта.",
            "initialCode": "function addMethodToObject() {\n const person = {\n name: 'Анна',\n age: 30,\n // Добавьте метод getInfo, который возвращает строку\n };\n \n return person.getInfo();\n}",
            "solution": "function addMethodToObject() {\n const person = {\n name: 'Анна',\n age: 30,\n // Добавьте метод getInfo\n getInfo() {\n return `Имя: ${this.name}, Возраст: ${this.age}`;\n }\n };\n \n return person.getInfo();\n}",
            "hints": [
                "Используйте сокращенный синтаксис метода",
                "this ссылается на текущий объект",
                "Используйте шаблонные строки для форматирования"
            ],
            "tests": [
                { "code": "addMethodToObject()", "expected": 'Имя: Анна, Возраст: 30' }
            ],
            "chapter": "Часть 3: Структуры данных"
        },
        {
            "id": 28,
            "title": "Методы Object.keys, values, entries",
            "difficulty": "medium",
            "description": "Используйте методы Object для работы с объектом {name: 'Иван', age: 25, city: 'Москва'}.\n\nВерните массив с:\n1. Ключами объекта\n2. Значениями объекта\n3. Парами ключ-значение",
            "initialCode": "function objectMethods() {\n const user = {name: 'Иван', age: 25, city: 'Москва'};\n \n // Используйте Object методы:\n // keys - для получения ключей\n // values - для получения значений\n // entries - для получения пар [ключ, значение]\n \n return [keys, values, entries];\n}",
            "solution": "function objectMethods() {\n const user = {name: 'Иван', age: 25, city: 'Москва'};\n \n // Используйте Object методы\n const keys = Object.keys(user);\n const values = Object.values(user);\n const entries = Object.entries(user);\n \n return [keys, values, entries];\n}",
            "hints": [
                "Object.keys возвращает массив ключей",
                "Object.values возвращает массив значений",
                "Object.entries возвращает массив пар [ключ, значение]"
            ],
            "tests": [
                { "code": "objectMethods()", "expected": [['name', 'age', 'city'], ['Иван', 25, 'Москва'], [['name', 'Иван'], ['age', 25], ['city', 'Москва']]] }
            ],
            "chapter": "Часть 3: Структуры данных"
        },
        {
            "id": 29,
            "title": "Глубокая копия объекта",
            "difficulty": "hard",
            "description": "Создайте глубокую копию объекта (включая вложенные объекты).\n\nПример: объект {a: 1, b: {c: 2}} после копирования и изменения копии не должен изменять оригинал.",
            "initialCode": "function deepCopy(obj) {\n // Создайте глубокую копию объекта\n \n}",
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
            "description": "Используйте деструктуризацию для извлечения значений из объекта и массива.\n\nИз объекта {name: 'Иван', age: 25, city: 'Москва'} извлеките name и age.\nИз массива [1, 2, 3, 4, 5] извлеките первые два элемента и остальные в отдельный массив.",
            "initialCode": "function destructuring() {\n const user = {name: 'Иван', age: 25, city: 'Москва'};\n const numbers = [1, 2, 3, 4, 5];\n \n // Используйте деструктуризацию:\n // Для объекта: извлеките name как userName, age как userAge\n // Для массива: извлеките first, second, ...rest\n \n return [userName, userAge, first, second, rest];\n}",
            "solution": "function destructuring() {\n const user = {name: 'Иван', age: 25, city: 'Москва'};\n const numbers = [1, 2, 3, 4, 5];\n \n // Деструктуризация объекта\n const {name: userName, age: userAge} = user;\n \n // Деструктуризация массива\n const [first, second, ...rest] = numbers;\n \n return [userName, userAge, first, second, rest];\n}",
            "hints": [
                "Для объектов используйте {}",
                "Для массивов используйте []",
                "rest оператор ... собирает остальные элементы"
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
            "description": "Создайте функцию declaration с именем greet, которая принимает имя и возвращает приветствие в формате 'Привет, [имя]!'.",
            "initialCode": "// Используйте function declaration\n \nfunction greet(name) {\n // Напишите функцию здесь\n \n}",
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
            "description": "Создайте функцию expression с именем square, которая принимает число и возвращает его квадрат.\n\nВызовите функцию с аргументом 5 и верните результат.",
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
            "description": "Создайте стрелочную функцию add, которая принимает два числа и возвращает их сумму.\n\nВызовите функцию с аргументами 2 и 3 и верните результат.",
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
            "description": "Создайте функцию greetPerson с параметрами по умолчанию. Функция принимает имя и приветствие (по умолчанию 'Привет') и возвращает строку в формате '[приветствие], [имя]!'.",
            "initialCode": "function greetPerson(name, greeting) {\n // Установите greeting по умолчанию как 'Привет'\n \n}",
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
            "description": "Используйте rest параметры для создания функции sumAll, которая суммирует любое количество чисел.\n\nПример: sumAll(1, 2, 3) → 6",
            "initialCode": "function sumAll(...numbers) {\n // Используйте rest параметры\n // Верните сумму всех чисел\n \n}",
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
            "description": "Создайте замыкание для счетчика. Функция createCounter должна возвращать функцию, которая при каждом вызове увеличивает счетчик на 1 и возвращает текущее значение.",
            "initialCode": "function createCounter() {\n // Создайте замыкание\n // Верните функцию, которая увеличивает счетчик\n \n}",
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
            "title": "Рекурсивное вычисление факториала",
            "difficulty": "medium",
            "description": "Напишите рекурсивную функцию factorialRecursive для вычисления факториала числа n.\n\nФакториал 0 и 1 равен 1.",
            "initialCode": "function factorialRecursive(n) {\n // Используйте рекурсию\n // Базовый случай: если n <= 1, верните 1\n // Иначе верните n * factorialRecursive(n - 1)\n \n}",
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
            "description": "Создайте каррированную функцию multiply. Функция должна принимать первый аргумент и возвращать функцию, которая принимает второй аргумент и возвращает произведение.\n\nПример: multiply(2)(3) → 6",
            "initialCode": "function multiply(a) {\n // Реализуйте каррирование\n // Верните функцию, которая принимает b и возвращает a * b\n \n}",
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
            "description": "Создайте функцию applyOperation, которая принимает массив чисел и функцию operation, применяет operation к каждому элементу и возвращает новый массив.",
            "initialCode": "function applyOperation(numbers, operation) {\n // operation - функция\n // Примените operation к каждому элементу numbers\n \n}",
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
            "description": "Создайте IIFE для создания приватной области видимости. IIFE должна возвращать объект с методом getSecret, который возвращает приватную переменную.",
            "initialCode": "// Создайте IIFE\n // Внутри создайте приватную переменную secret\n // Верните объект с методом getSecret\n \n \nreturn result.getSecret();",
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
            "description": "Напишите функцию, которая демонстрирует разные методы поиска элементов DOM.\n\nВерните массив с результатами поиска.",
            "initialCode": "function findElements() {\n // В этом задании предполагается, что HTML уже загружен\n // Используйте разные методы поиска:\n // 1. getElementById\n // 2. getElementsByClassName\n // 3. getElementsByTagName\n // 4. querySelector\n \n return [byId, byClass, byTag, byQuery];\n}",
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
            "description": "Создайте div элемент и измените его содержимое двумя способами:\n1. С помощью textContent\n2. С помощью innerHTML\n\nВерните массив [textContent, innerHTML].",
            "initialCode": "function changeContent() {\n // Создайте элемент div\n const div = document.createElement('div');\n \n // Измените содержимое:\n // 1. div.textContent = 'Простой текст'\n // 2. div.innerHTML = '<strong>Жирный текст</strong>'\n \n return [div.textContent, div.innerHTML];\n}",
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
            "description": "Создайте div элемент и выполните операции с классами:\n1. Добавьте классы 'active' и 'visible'\n2. Удалите класс 'visible'\n3. Переключите класс 'hidden' два раза\n\nВерните итоговое значение className.",
            "initialCode": "function manipulateClasses() {\n const div = document.createElement('div');\n \n // Работа с классами:\n // 1. Добавьте 'active' и 'visible'\n // 2. Удалите 'visible'\n // 3. Переключите 'hidden' два раза\n \n return div.className;\n}",
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
            "description": "Создайте два параграфа с текстом и добавьте их в контейнер div.\n\nВерните количество дочерних элементов в контейнере.",
            "initialCode": "function createAndAppend() {\n const container = document.createElement('div');\n \n // Создайте и добавьте элементы:\n // 1. Создайте p1 с текстом 'Первый параграф'\n // 2. Создайте p2 с текстом 'Второй параграф'\n // 3. Добавьте оба в container\n \n return container.children.length;\n}",
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
            "description": "Создайте кнопку, добавьте обработчик клика, имитируйте 3 клика, затем удалите обработчик и имитируйте еще один клик.\n\nВерните количество зарегистрированных кликов.",
            "initialCode": "function handleEvents() {\n const button = document.createElement('button');\n let clickCount = 0;\n \n // Добавьте обработчик клика\n // Имитируйте 2 клика\n // Удалите обработчик\n // Имитируйте еще один клик\n \n return clickCount;\n}",
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
            "description": "Создайте список ul с 3 элементами li. Используйте делегирование событий для обработки кликов на элементах списка.\n\nПри клике на элемент сохраните его data-id в переменную clickedItem.",
            "initialCode": "function eventDelegation() {\n const ul = document.createElement('ul');\n let clickedItem = '';\n \n // Создайте 3 элемента списка с data-id\n // Делегирование событий на ul\n // Имитируйте клик по второму элементу\n \n return clickedItem;\n}",
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
            "title": "Валидация формы",
            "difficulty": "medium",
            "description": "Создайте форму с полем email и добавьте валидацию. Проверьте, что email содержит символ '@'.\n\nИмитируйте отправку формы с валидным email и верните результат валидации.",
            "initialCode": "function formValidation() {\n const form = document.createElement('form');\n const input = document.createElement('input');\n input.type = 'email';\n form.appendChild(input);\n \n let isValid = false;\n \n // Добавьте валидацию при отправке формы\n // Проверьте, что input.value содержит '@'\n \n return isValid;\n}",
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
            "description": "Создайте div с transition для opacity. Установите opacity: 1, затем добавьте класс для анимации и измените opacity на 0.\n\nВерните массив [opacity до анимации, opacity после анимации].",
            "initialCode": "function cssAnimation() {\n const div = document.createElement('div');\n div.style.transition = 'opacity 0.5s';\n \n // Управление анимацией:\n // 1. Установите opacity: '1'\n // 2. Запишите начальное значение\n // 3. Установите opacity: '0'\n \n return [before, after];\n}",
            "solution": "function cssAnimation() {\n const div = document.createElement('div');\n div.style.transition = 'opacity 0.5s';\n \n // Начальное состояние\n div.style.opacity = '1';\n const before = div.style.opacity;\n \n // Анимация\n div.style.opacity = '0';\n \n const after = div.style.opacity;\n \n return [before, after];\n}",
            "hints": [
                "Используйте CSS transition для анимации",
                "Меняйте свойства через стили",
                "opacity для плавного появления/исчезновения"
            ],
            "tests": [
                { "code": "cssAnimation()", "expected": ['1', '0'] }
            ],
            "chapter": "Часть 5: Работа с DOM"
        },
        {
            "id": 49,
            "title": "Работа с data-атрибутами",
            "difficulty": "easy",
            "description": "Создайте div элемент, установите data-атрибуты:\n- data-id='123'\n- data-user-name='Иван'\n\nЗатем получите значения этих атрибутов и верните массив [id, name].",
            "initialCode": "function dataAttributes() {\n const div = document.createElement('div');\n \n // Установите data-атрибуты:\n // data-id='123'\n // data-user-name='Иван'\n // Получите значения\n \n return [id, name];\n}",
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
            "description": "Используйте DocumentFragment для массового добавления 100 параграфов в контейнер.\n\nВерните количество добавленных элементов.",
            "initialCode": "function useFragment() {\n const container = document.createElement('div');\n \n // Используйте DocumentFragment\n // Создайте 100 элементов p\n // Добавьте их во фрагмент\n // Добавьте фрагмент в container\n \n return container.children.length;\n}",
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
            "description": "Создайте функцию processData, которая принимает данные и callback функцию. Функция должна обработать данные (преобразовать в верхний регистр) и вызвать callback с результатом.",
            "initialCode": "function processData(data, callback) {\n // Имитируйте асинхронную обработку\n // Вызовите callback с результатом\n \n}",
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
            "description": "Создайте функцию fetchData, которая возвращает Promise. Promise должен успешно завершиться через 100 мс с сообщением 'Данные получены'.",
            "initialCode": "function fetchData() {\n // Верните Promise\n // Через 100 мс вызовите resolve с сообщением\n \n}",
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
            "title": "Цепочка Promise",
            "difficulty": "medium",
            "description": "Создайте цепочку Promise с обработкой ошибок. Начните с Promise.resolve(10), умножьте на 2, проверьте если значение > 15 - выбросьте ошибку, обработайте ошибку в catch.",
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
            "title": "Promise.all для параллельного выполнения",
            "difficulty": "medium",
            "description": "Используйте Promise.all для параллельного выполнения трех промисов и суммирования их результатов.\n\nПромисы: Promise.resolve(1), Promise.resolve(2), Promise.resolve(3).",
            "initialCode": "function parallelPromises() {\n const p1 = Promise.resolve(1);\n const p2 = Promise.resolve(2);\n const p3 = Promise.resolve(3);\n \n // Используйте Promise.all\n // Верните сумму результатов\n \n}",
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
            "title": "Promise.race для гонки промисов",
            "difficulty": "hard",
            "description": "Используйте Promise.race для гонки двух промисов: быстрого (50 мс) и медленного (100 мс).\n\nВерните результат первого завершенного промиса.",
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
            "description": "Используйте async/await для асинхронного получения пользователя. Создайте функцию getUser, которая возвращает Promise с объектом пользователя через 100 мс.",
            "initialCode": "async function fetchUser() {\n // Используйте async/await\n // Имитируйте асинхронный запрос\n // Обработайте ошибки через try/catch\n \n}",
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
            "description": "Создайте async функцию, которая имитирует рискованную операцию (может завершиться с ошибкой). Обработайте ошибки с помощью try/catch.",
            "initialCode": "async function riskyOperation() {\n // Добавьте обработку ошибок\n // Имитируйте операцию, которая может завершиться ошибкой\n \n}",
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
            "description": "Используйте Fetch API для GET запроса к JSONPlaceholder API. Получите список пользователей и верните количество пользователей.",
            "initialCode": "async function fetchUsers() {\n // Используйте fetch\n // Обработайте ошибки\n // Верните количество пользователей\n \n}",
            "solution": "async function fetchUsers() {\n try {\n const response = await fetch('https://jsonplaceholder.typicode.com/users');\n \n if (!response.ok) {\n throw new Error(`HTTP ошибка: ${response.status}`);\n }\n \n const users = await response.json();\n return users.length;\n } catch (error) {\n return 'Ошибка: ' + error.message;\n }\n}",
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
            "description": "Используйте Fetch API для POST запроса создания пользователя. Отправьте JSON данные и верните id созданного пользователя.",
            "initialCode": "async function createUser(userData) {\n // Используйте fetch для POST\n // Установите заголовки\n // Отправьте JSON данные\n \n}",
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
            "description": "Используйте AbortController для отмены fetch запроса. Имитируйте отмену через 10 мс после начала запроса.",
            "initialCode": "async function cancellableFetch() {\n // Используйте AbortController\n // Создайте signal\n // Отмените запрос через 10 мс\n \n}",
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
            "description": "Создайте конструктор функции Person, который принимает name и age, и добавляет метод greet, возвращающий приветствие.",
            "initialCode": "function Person(name, age) {\n // Реализуйте конструктор\n // Используйте this\n \n}",
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
            "description": "Создайте наследование через прототипы. Animal имеет метод speak, Dog наследует от Animal и добавляет метод bark.",
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
            "description": "Создайте класс Person с конструктором (принимает name, age) и методами greet (возвращает приветствие) и haveBirthday (увеличивает age на 1).",
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
            "description": "Создайте наследование классов Student extends Person. Student добавляет свойство major и методы study и переопределяет introduce.",
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
            "description": "Создайте класс Rectangle с приватными свойствами _width, _height. Добавьте геттер area и сеттер для width с валидацией.",
            "initialCode": "class Rectangle {\n constructor(width, height) {\n // Используйте приватные свойства\n }\n \n // Добавьте геттер area\n \n // Добавьте геттер и сеттер для width\n \n}",
            "solution": "class Rectangle {\n constructor(width, height) {\n this._width = width;\n this._height = height;\n }\n \n // Геттер для площади\n get area() {\n return this._width * this._height;\n }\n \n // Геттер для ширины\n get width() {\n return this._width;\n }\n \n // Сеттер для ширины с валидацией\n set width(value) {\n if (value <= 0) {\n throw new Error('Ширина должна быть положительной');\n }\n this._width = value;\n }\n}",
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
            "description": "Создайте класс MathUtils со статическими методами sum, multiply, свойством PI и методом circleArea.",
            "initialCode": "class MathUtils {\n // Добавьте статические методы и свойства\n \n}",
            "solution": "class MathUtils {\n // Статические методы\n static sum(a, b) {\n return a + b;\n }\n \n static multiply(a, b) {\n return a * b;\n }\n \n // Статическое свойство\n static PI = 3.14159;\n \n // Статический метод, использующий другие статические методы\n static circleArea(radius) {\n return this.PI * radius * radius;\n }\n}",
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
            "description": "Создайте класс BankAccount с приватными полями #balance, #transactionCount. Добавьте методы deposit, withdraw и приватный метод #logTransaction.",
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
            "description": "Создайте иерархию классов Shape, Circle, Square с методом area. Продемонстрируйте полиморфизм через переопределение методов.",
            "initialCode": "class Shape {\n area() {\n return 0;\n }\n}\n\nclass Circle extends Shape {\n constructor(radius) {\n super();\n this.radius = radius;\n }\n \n // Переопределите area\n \n}\n\nclass Square extends Shape {\n constructor(side) {\n super();\n this.side = side;\n }\n \n // Переопределите area\n \n}\n\nreturn [new Circle(5).area(), new Square(4).area()];",
            "solution": "class Shape {\n area() {\n return 0;\n }\n}\n\nclass Circle extends Shape {\n constructor(radius) {\n super();\n this.radius = radius;\n }\n \n // Переопределите area\n area() {\n return Math.PI * this.radius * this.radius;\n }\n}\n\nclass Square extends Shape {\n constructor(side) {\n super();\n this.side = side;\n }\n \n // Переопределите area\n area() {\n return this.side * this.side;\n }\n}\n\nreturn [new Circle(5).area().toFixed(2), new Square(4).area()];",
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
            "description": "Создайте миксины Loggable и Greetable и примените их к классу User.",
            "initialCode": "// Создайте миксины\n \nclass User {\n constructor(name) {\n this.name = name;\n }\n}\n\n// Примените миксины\n \nreturn new User('Иван').sayHello();",
            "solution": "// Миксин для логирования\nconst Loggable = Base => class extends Base {\n log(message) {\n console.log(`[${new Date().toISOString()}] ${message}`);\n }\n};\n\n// Миксин для приветствия\nconst Greetable = Base => class extends Base {\n sayHello() {\n return `Привет, я ${this.name}`;\n }\n};\n\n// Примените миксины\nconst UserWithFeatures = Greetable(Loggable(User));\n\nreturn new UserWithFeatures('Иван').sayHello();",
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
            "description": "Используйте Symbol для создания приватных методов в классе SecretVault.",
            "initialCode": "// Символы для приватных методов\n \nclass SecretVault {\n constructor(password) {\n \n }\n \n // Публичный метод\n getSecret(inputPassword) {\n \n }\n}",
            "solution": "// Символы для приватных методов\nconst _checkPassword = Symbol('checkPassword');\nconst _getStoredSecret = Symbol('getStoredSecret');\n\nclass SecretVault {\n constructor(password) {\n this.password = password;\n this.secret = 'Сверхсекретная информация';\n }\n \n // Приватный метод через Symbol\n [_checkPassword](input) {\n return input === this.password;\n }\n \n // Приватный метод через Symbol\n [_getStoredSecret]() {\n return this.secret;\n }\n \n // Публичный метод\n getSecret(inputPassword) {\n if (this[_checkPassword](inputPassword)) {\n return this[_getStoredSecret]();\n }\n return 'Доступ запрещен';\n }\n}",
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
            "description": "Используйте spread оператор для:\n1. Объединения массивов\n2. Объединения объектов\n3. Копирования массива\n\nВерните массив с результатами.",
            "initialCode": "function spreadExamples() {\n const arr1 = [1, 2, 3];\n const arr2 = [4, 5, 6];\n const obj1 = {a: 1, b: 2};\n const obj2 = {b: 3, c: 4};\n \n // Используйте spread:\n // 1. Объедините arr1, arr2 и добавьте 7\n // 2. Объедините obj1 и obj2\n // 3. Создайте копию arr1\n \n return [combinedArr, combinedObj, copiedArr];\n}",
            "solution": "function spreadExamples() {\n const arr1 = [1, 2, 3];\n const arr2 = [4, 5, 6];\n const obj1 = {a: 1, b: 2};\n const obj2 = {b: 3, c: 4};\n \n // Spread для массивов\n const combinedArr = [...arr1, ...arr2, 7];\n \n // Spread для объектов\n const combinedObj = {...obj1, ...obj2};\n \n // Копия массива\n const copiedArr = [...arr1];\n \n return [combinedArr, combinedObj, copiedArr];\n}",
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
            "description": "Используйте деструктуризацию с значениями по умолчанию для объекта и массива.",
            "initialCode": "function destructuringWithDefaults() {\n const user = {name: 'Иван', age: 25};\n const numbers = [1, 2];\n \n // Деструктуризация с defaults:\n // Из user: name, age, city (по умолчанию 'Москва')\n // Из numbers: first, second, third (по умолчанию 3)\n \n return [userName, userAge, userCity, first, second, third];\n}",
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
            "description": "Используйте optional chaining для безопасного доступа к свойствам объекта.",
            "initialCode": "function optionalChaining() {\n const user = {\n name: 'Иван',\n address: {\n city: 'Москва',\n street: null\n }\n };\n \n const user2 = {};\n \n // Используйте optional chaining\n \n return [city, street, zip, name2, city2];\n}",
            "solution": "function optionalChaining() {\n const user = {\n name: 'Иван',\n address: {\n city: 'Москва',\n street: null\n }\n };\n \n const user2 = {};\n \n // Optional chaining\n const city = user.address?.city;\n const street = user.address?.street;\n const zip = user.address?.zip?.code;\n \n const name2 = user2?.name;\n const city2 = user2?.address?.city ?? 'Неизвестно';\n \n return [city, street, zip, name2, city2];\n}",
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
            "description": "Создайте генератор numberGenerator, который генерирует бесконечную последовательность чисел, начиная с 1.",
            "initialCode": "function* numberGenerator() {\n // Реализуйте генератор\n // Используйте yield\n \n}",
            "solution": "function* numberGenerator() {\n let num = 1;\n while (true) {\n yield num;\n num++;\n }\n}",
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
            "description": "Создайте класс Range с итератором, который генерирует числа от start до end включительно.",
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
            "description": "Создайте Proxy для объекта, который перехватывает операции get, set, deleteProperty.",
            "initialCode": "function createProtectedObject(target) {\n // Создайте Proxy\n // Перехватите get, set, deleteProperty\n \n}",
            "solution": "function createProtectedObject(target) {\n return new Proxy(target, {\n get(obj, prop) {\n if (prop in obj) {\n return obj[prop];\n } else {\n return `Свойство \\\"${prop}\\\" не существует`;\n }\n },\n \n set(obj, prop, value) {\n if (prop === 'password') {\n console.log('Попытка изменить пароль отклонена');\n return false;\n }\n \n if (typeof value === 'string' && value.length > 50) {\n throw new Error('Значение слишком длинное');\n }\n \n obj[prop] = value;\n return true;\n },\n \n deleteProperty(obj, prop) {\n if (prop.startsWith('_')) {\n throw new Error('Нельзя удалять приватные свойства');\n }\n delete obj[prop];\n return true;\n }\n });\n}",
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
            "description": "Используйте Reflect для метапрограммирования: has, get, ownKeys, construct, set, deleteProperty.",
            "initialCode": "function reflectExamples() {\n const obj = {a: 1, b: 2};\n \n // Используйте Reflect методы\n \n return [hasA, getB, props, newObj];\n}",
            "solution": "function reflectExamples() {\n const obj = {a: 1, b: 2};\n \n // Reflect методы\n const hasA = Reflect.has(obj, 'a');\n const getB = Reflect.get(obj, 'b');\n const props = Reflect.ownKeys(obj);\n \n // Создание объекта\n const newObj = Reflect.construct(Object, []);\n \n // Установка свойства\n Reflect.set(obj, 'c', 3);\n \n // Удаление свойства\n Reflect.deleteProperty(obj, 'a');\n \n return [hasA, getB, props, Object.keys(newObj)];\n}",
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
            "description": "Используйте WeakMap для хранения приватных данных класса User и WeakSet для отслеживания удаленных пользователей.",
            "initialCode": "const privateData = new WeakMap();\n\nclass User {\n constructor(name, age) {\n // Храните приватные данные в WeakMap\n \n }\n \n getName() {\n \n }\n \n getAge() {\n \n }\n}",
            "solution": "const privateData = new WeakMap();\n\nclass User {\n constructor(name, age) {\n // Храните приватные данные в WeakMap\n privateData.set(this, {\n name: name,\n age: age,\n createdAt: new Date()\n });\n }\n \n getName() {\n return privateData.get(this).name;\n }\n \n getAge() {\n return privateData.get(this).age;\n }\n \n // Метод для WeakSet\n static #deletedUsers = new WeakSet();\n \n delete() {\n User.#deletedUsers.add(this);\n }\n \n static isDeleted(user) {\n return User.#deletedUsers.has(user);\n }\n}",
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
            "description": "Создайте модуль math.js с разными типами экспорта: именованные экспорты, экспорт по умолчанию.",
            "initialCode": "// math.js - модуль с математическими функциями\n// Экспортируйте функции\n \n \n \n// Экспорт по умолчанию\n ",
            "solution": "// math.js - модуль с математическими функциями\n\n// Именованный экспорт\nexport const PI = 3.14159;\n\nexport function sum(a, b) {\n return a + b;\n}\n\nexport function multiply(a, b) {\n return a * b;\n}\n\n// Экспорт нескольких значений\nconst privateVar = 'секрет';\nfunction internal() {\n return 'внутренняя';\n}\n\nexport { privateVar as publicName, internal };\n\n// Экспорт по умолчанию\nexport default class Calculator {\n add(a, b) {\n return a + b;\n }\n}",
            "hints": [
                "export создает именованный экспорт",
                "export default создает экспорт по умолчанию",
                "as переименовывает при экспорте"
            ],
            "tests": [
                { "code": "typeof PI", "expected": 'undefined' }
            ],
            "chapter": "Часть 8: Продвинутые концепции"
        },
        {
            "id": 80,
            "title": "Модули ES6 - импорт",
            "difficulty": "medium",
            "description": "Импортируйте функции из модуля math.js разными способами.",
            "initialCode": "// app.js - импорт из math.js\n// Импортируйте функции\n \n \n \nreturn sum(2, 3);",
            "solution": "// app.js - импорт из math.js\n\n// Импорт именованных экспортов\nimport { PI, sum, multiply } from './math.js';\n\n// Импорт с переименованием\nimport { publicName as secret } from './math.js';\n\n// Импорт всего как объекта\nimport * as math from './math.js';\n\n// Импорт по умолчанию\nimport Calculator from './math.js';\n\nreturn sum(2, 3);",
            "hints": [
                "import { name } для именованных импортов",
                "import defaultExport для импорта по умолчанию",
                "as переименовывает при импорте"
            ],
            "tests": [
                { "code": "5", "expected": 5 }
            ],
            "chapter": "Часть 8: Продвинутые концепции"
        },
        {
            "id": 81,
            "title": "Модульный паттерн (до ES6)",
            "difficulty": "medium",
            "description": "Создайте модуль с помощью IIFE, который инкапсулирует счетчик и предоставляет публичное API.",
            "initialCode": "const CounterModule = (function() {\n // Реализуйте модульный паттерн\n // Создайте приватную переменную count\n // Верните объект с методами\n \n})();\n\nCounterModule.increment();\nCounterModule.increment();\nreturn CounterModule.getCount();",
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
            "description": "Реализуйте паттерн Наблюдатель: класс EventEmitter с методами on, off, emit, once.",
            "initialCode": "class EventEmitter {\n constructor() {\n this.events = {};\n }\n \n // Реализуйте методы on, off, emit, once\n \n}",
            "solution": "class EventEmitter {\n constructor() {\n this.events = {};\n }\n \n // Подписка на событие\n on(event, listener) {\n if (!this.events[event]) {\n this.events[event] = [];\n }\n this.events[event].push(listener);\n \n // Возврат функции для отписки\n return () => this.off(event, listener);\n }\n \n // Отписка от события\n off(event, listener) {\n if (!this.events[event]) return;\n \n const index = this.events[event].indexOf(listener);\n if (index !== -1) {\n this.events[event].splice(index, 1);\n }\n }\n \n // Генерация события\n emit(event, ...args) {\n if (!this.events[event]) return;\n \n const listeners = this.events[event].slice();\n \n for (const listener of listeners) {\n try {\n listener.apply(this, args);\n } catch (error) {\n console.error(`Ошибка в обработчике ${event}:`, error);\n }\n }\n }\n \n // Подписка один раз\n once(event, listener) {\n const wrapper = (...args) => {\n listener.apply(this, args);\n this.off(event, wrapper);\n };\n \n this.on(event, wrapper);\n }\n}",
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
            "description": "Реализуйте паттерн Одиночка для класса Database.",
            "initialCode": "class Database {\n // Реализуйте Singleton\n \n constructor(config) {\n this.config = config;\n }\n \n query(sql) {\n return `Результат: ${sql}`;\n }\n}",
            "solution": "class Database {\n static instance = null;\n \n constructor(config) {\n if (Database.instance) {\n return Database.instance;\n }\n \n this.config = config;\n this.connection = this.connect();\n Database.instance = this;\n }\n \n connect() {\n console.log('Подключение к базе...');\n return { connected: true, config: this.config };\n }\n \n query(sql) {\n return `Результат: ${sql}`;\n }\n \n // Статический метод для получения экземпляра\n static getInstance(config) {\n if (!Database.instance) {\n Database.instance = new Database(config);\n }\n return Database.instance;\n }\n}",
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
            "description": "Реализуйте фабричный метод для создания транспортных средств.",
            "initialCode": "class VehicleFactory {\n // Реализуйте фабричный метод\n \n}\n\nclass Car {\n constructor(brand, model) {\n this.brand = brand;\n this.model = model;\n }\n \n drive() {\n return 'Еду на машине';\n }\n}\n\nclass Bike {\n constructor(brand, gears) {\n this.brand = brand;\n this.gears = gears;\n }\n \n ride() {\n return 'Еду на велосипеде';\n }\n}",
            "solution": "class VehicleFactory {\n // Фабричный метод\n createVehicle(type, options = {}) {\n switch(type) {\n case 'car':\n return new Car(options.brand, options.model);\n case 'bike':\n return new Bike(options.brand, options.gears);\n default:\n throw new Error(`Неизвестный тип: ${type}`);\n }\n }\n}\n\nclass Car {\n constructor(brand = 'Unknown', model = 'Unknown') {\n this.brand = brand;\n this.model = model;\n }\n \n drive() {\n return `Еду на ${this.brand} ${this.model}`;\n }\n}\n\nclass Bike {\n constructor(brand = 'Unknown', gears = 1) {\n this.brand = brand;\n this.gears = gears;\n }\n \n ride() {\n return `Еду на велосипеде ${this.brand} (${this.gears} скоростей)`;\n }\n}",
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
            "description": "Реализуйте декоратор функции withLogging, который добавляет логирование вызовов.",
            "initialCode": "function withLogging(func) {\n // Реализуйте декоратор\n \n}\n\nfunction expensiveOperation(n) {\n return n * n;\n}",
            "solution": "// Декоратор функции\nfunction withLogging(func) {\n return function(...args) {\n console.log(`Вызов ${func.name} с аргументами:`, args);\n const start = performance.now();\n const result = func.apply(this, args);\n const end = performance.now();\n console.log(`Результат: ${result}, время: ${(end - start).toFixed(2)}мс`);\n return result;\n };\n}\n\n// Пример использования\nfunction expensiveOperation(n) {\n let result = 0;\n for (let i = 0; i < n * 1000000; i++) {\n result += Math.random();\n }\n return result;\n}\n\nconst loggedOperation = withLogging(expensiveOperation);\nreturn loggedOperation(5);",
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
            "description": "Реализуйте паттерн Стратегия для разных способов оплаты.",
            "initialCode": "class PaymentContext {\n // Реализуйте паттерн Стратегия\n \n}\n\nclass CreditCardPayment {\n pay(amount) {\n return `Оплата картой: ${amount}`;\n }\n}\n\nclass PayPalPayment {\n pay(amount) {\n return `Оплата PayPal: ${amount}`;\n }\n}",
            "solution": "// Интерфейс стратегии\nclass PaymentStrategy {\n pay(amount) {\n throw new Error('Метод pay должен быть реализован');\n }\n}\n\n// Конкретные стратегии\nclass CreditCardPayment extends PaymentStrategy {\n constructor(cardNumber, cvv) {\n super();\n this.cardNumber = cardNumber;\n this.cvv = cvv;\n }\n \n pay(amount) {\n return `Оплачено ${amount} руб. картой ${this.cardNumber.slice(-4)}`;\n }\n}\n\nclass PayPalPayment extends PaymentStrategy {\n constructor(email) {\n super();\n this.email = email;\n }\n \n pay(amount) {\n return `Оплачено ${amount} руб. через PayPal (${this.email})`;\n }\n}\n\n// Контекст\nclass PaymentContext {\n constructor(strategy = null) {\n this.strategy = strategy;\n }\n \n setStrategy(strategy) {\n this.strategy = strategy;\n }\n \n executePayment(amount) {\n if (!this.strategy) {\n throw new Error('Стратегия оплаты не установлена');\n }\n return this.strategy.pay(amount);\n }\n}",
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
            "description": "Реализуйте паттерн Адаптер для адаптации старого интерфейса принтера к новому.",
            "initialCode": "// Старый интерфейс\nclass OldPrinter {\n printText(text) {\n console.log(`Печать: ${text}`);\n }\n}\n\n// Новый интерфейс\nclass NewPrinter {\n print(message) {\n console.log(`Новая печать: ${message}`);\n }\n}\n\n// Реализуйте адаптер\n ",
            "solution": "// Старый интерфейс\nclass OldPrinter {\n printText(text) {\n return `Печать: ${text}`;\n }\n}\n\n// Новый интерфейс\nclass NewPrinter {\n print(message) {\n return `Новая печать: ${message}`;\n }\n}\n\n// Адаптер\nclass PrinterAdapter {\n constructor(oldPrinter) {\n this.oldPrinter = oldPrinter;\n }\n \n // Реализуем новый интерфейс\n print(message) {\n const result = this.oldPrinter.printText(message);\n return result.replace('Печать:', 'Адаптированная печать:');\n }\n}",
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
            "description": "Реализуйте пул промисов для ограничения параллельных запросов.",
            "initialCode": "class PromisePool {\n constructor(maxConcurrent) {\n this.maxConcurrent = maxConcurrent;\n this.queue = [];\n this.running = 0;\n }\n \n // Добавьте задачи в пул\n \n}",
            "solution": "class PromisePool {\n constructor(maxConcurrent) {\n this.maxConcurrent = maxConcurrent;\n this.queue = [];\n this.running = 0;\n this.results = [];\n }\n \n // Добавление задачи\n add(task) {\n return new Promise((resolve, reject) => {\n this.queue.push({\n task,\n resolve,\n reject\n });\n this._processQueue();\n });\n }\n \n // Запуск всех задач из массива\n async all(tasks) {\n const promises = tasks.map(task => this.add(task));\n return Promise.all(promises);\n }\n \n // Обработка очереди\n _processQueue() {\n if (this.running >= this.maxConcurrent || this.queue.length === 0) {\n return;\n }\n \n this.running++;\n const {task, resolve, reject} = this.queue.shift();\n \n // Выполнение задачи\n Promise.resolve()\n .then(() => task())\n .then(result => {\n resolve(result);\n this.results.push(result);\n })\n .catch(error => {\n reject(error);\n })\n .finally(() => {\n this.running--;\n this._processQueue();\n });\n \n if (this.queue.length > 0) {\n this._processQueue();\n }\n }\n}",
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
            "description": "Реализуйте мемоизацию для тяжелых вычислений.",
            "initialCode": "function memoize(func) {\n // Реализуйте мемоизацию\n \n}",
            "solution": "function memoize(func, resolver) {\n const cache = new Map();\n \n return function(...args) {\n const key = resolver ? resolver(...args) : JSON.stringify(args);\n \n if (cache.has(key)) {\n return cache.get(key);\n }\n \n const result = func.apply(this, args);\n cache.set(key, result);\n \n return result;\n };\n}",
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
            "description": "Реализуйте дебаунс и троттлинг для оптимизации событий.",
            "initialCode": "function debounce(func, delay) {\n // Реализуйте debounce\n \n}\n\nfunction throttle(func, limit) {\n // Реализуйте throttle\n \n}",
            "solution": "// Дебаунс: выполнение после паузы\nfunction debounce(func, delay, immediate = false) {\n let timeout;\n \n return function(...args) {\n const context = this;\n \n const later = function() {\n timeout = null;\n if (!immediate) {\n func.apply(context, args);\n }\n };\n \n const callNow = immediate && !timeout;\n \n clearTimeout(timeout);\n timeout = setTimeout(later, delay);\n \n if (callNow) {\n func.apply(context, args);\n }\n };\n}\n\n// Троттлинг: выполнение не чаще чем limit\nfunction throttle(func, limit) {\n let inThrottle;\n let lastFunc;\n let lastRan;\n \n return function(...args) {\n const context = this;\n \n if (!inThrottle) {\n func.apply(context, args);\n lastRan = Date.now();\n inThrottle = true;\n } else {\n clearTimeout(lastFunc);\n \n lastFunc = setTimeout(function() {\n if (Date.now() - lastRan >= limit) {\n func.apply(context, args);\n lastRan = Date.now();\n }\n }, limit - (Date.now() - lastRan));\n }\n };\n}",
            "hints": [
                "Debounce: выполнение после паузы в вызовах",
                "Throttle: выполнение не чаще указанного интервала",
                "Используйте setTimeout и clearTimeout"
            ],
            "tests": [
                { "code": "let calls = 0; const fn = () => calls++; const debounced = debounce(fn, 50); debounced(); debounced(); setTimeout(() => calls, 100)", "expected": 0 }
            ],
            "chapter": "Часть 9: Практические паттерны"
        },
        {
            "id": 91,
            "title": "Обработка ошибок с try-catch",
            "difficulty": "easy",
            "description": "Напишите функцию safeParseJSON, которая безопасно парсит JSON строку и возвращает объект или null при ошибке.",
            "initialCode": "function safeParseJSON(jsonString) {\n // Обработайте ошибки парсинга JSON\n \n}",
            "solution": "function safeParseJSON(jsonString) {\n try {\n return JSON.parse(jsonString);\n } catch (error) {\n console.error('Ошибка парсинга JSON:', error.message);\n return null;\n }\n}",
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
            "description": "Напишите функцию validateUserData для валидации данных пользователя.",
            "initialCode": "function validateUserData(data) {\n // Валидируйте данные пользователя\n \n}",
            "solution": "function validateUserData(data) {\n const errors = [];\n \n // Проверка имени\n if (!data.name || typeof data.name !== 'string') {\n errors.push('Имя обязательно и должно быть строкой');\n } else if (data.name.trim().length < 2) {\n errors.push('Имя должно содержать минимум 2 символа');\n } else if (data.name.length > 50) {\n errors.push('Имя слишком длинное (макс. 50 символов)');\n }\n \n // Проверка email\n const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n if (!data.email || !emailRegex.test(data.email)) {\n errors.push('Введите корректный email');\n }\n \n // Проверка возраста\n if (data.age !== undefined) {\n const age = Number(data.age);\n if (isNaN(age) || !Number.isInteger(age)) {\n errors.push('Возраст должен быть целым числом');\n } else if (age < 0 || age > 150) {\n errors.push('Возраст должен быть от 0 до 150');\n }\n }\n \n return {\n isValid: errors.length === 0,\n errors: errors\n };\n}",
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
            "description": "Оптимизируйте выполнение циклов разными способами.",
            "initialCode": "function optimizeLoops() {\n const largeArray = Array.from({length: 10000}, (_, i) => i);\n let sum = 0;\n \n // Оптимизируйте цикл\n for (let i = 0; i < largeArray.length; i++) {\n sum += largeArray[i];\n }\n \n return sum;\n}",
            "solution": "function optimizeLoops() {\n const largeArray = Array.from({length: 10000}, (_, i) => i);\n let sum = 0;\n \n // Оптимизация 1: кэширование длины\n const len = largeArray.length;\n for (let i = 0; i < len; i++) {\n sum += largeArray[i];\n }\n \n // Оптимизация 2: обратный цикл\n let sum2 = 0;\n for (let i = largeArray.length - 1; i >= 0; i--) {\n sum2 += largeArray[i];\n }\n \n // Оптимизация 3: while цикл\n let sum3 = 0;\n let j = 0;\n while (j < largeArray.length) {\n sum3 += largeArray[j++];\n }\n \n // Оптимизация 4: встроенные методы\n const sum4 = largeArray.reduce((acc, val) => acc + val, 0);\n \n return [sum, sum2, sum3, sum4];\n}",
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
            "description": "Напишите иммутабельные функции вместо мутирующих.",
            "initialCode": "// Мутирующая функция (плохо)\nfunction addItemToCart(cart, item) {\n cart.push(item);\n return cart;\n}\n\n// Напишите иммутабельную версию\n ",
            "solution": "// Мутирующая функция (плохо)\nfunction addItemToCart(cart, item) {\n cart.push(item);\n return cart;\n}\n\n// Иммутабельная версия (хорошо)\nfunction addItemToCartImmutable(cart, item) {\n return [...cart, item];\n}\n\n// Иммутабельное обновление объекта\nfunction updateUserImmutable(user, updates) {\n return {\n ...user,\n ...updates\n };\n}\n\n// Иммутабельное удаление элемента\nfunction removeItemImmutable(cart, itemId) {\n return cart.filter(item => item.id !== itemId);\n}",
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
            "description": "Реализуйте ленивую загрузку для тяжелых модулей.",
            "initialCode": "function createLazyLoader() {\n // Реализуйте ленивую загрузку\n \n}",
            "solution": "// Ленивая загрузка модуля\nconst lazyModule = (importFn) => {\n let module = null;\n let loadPromise = null;\n \n return {\n async load() {\n if (module) return module;\n \n if (!loadPromise) {\n loadPromise = importFn().then(m => {\n module = m;\n return module;\n });\n }\n \n return loadPromise;\n },\n \n get exports() {\n return new Proxy({}, {\n get(target, prop) {\n if (module && prop in module) {\n return module[prop];\n }\n \n throw new Error(`Свойство ${prop} недоступно до загрузки модуля`);\n }\n });\n }\n };\n};",
            "hints": [
                "Загружайте ресурсы только когда нужны",
                "Используйте Proxy для отложенного доступа",
                "IntersectionObserver для ленивой загрузки изображений"
            ],
            "tests": [
                { "code": "const lazy = (() => { let value; return { get: () => value || (value = 42) }; })(); lazy.get()", "expected": 42 }
            ],
            "chapter": "Часть 10: Советы и лучшие практики"
        },
        {
            "id": 96,
            "title": "Кэширование запросов",
            "difficulty": "hard",
            "description": "Реализуйте кэширование для API запросов.",
            "initialCode": "function createCachedFetch() {\n // Реализуйте кэширование fetch запросов\n \n}",
            "solution": "function createCachedFetch(cacheTime = 5 * 60 * 1000) {\n const cache = new Map();\n \n return async function cachedFetch(url, options = {}) {\n const cacheKey = JSON.stringify({url, options});\n \n // Проверяем кэш\n const cached = cache.get(cacheKey);\n if (cached) {\n const {data, timestamp} = cached;\n \n if (Date.now() - timestamp < cacheTime) {\n console.log('Возвращаем из кэша:', url);\n return data.clone ? data.clone() : data;\n } else {\n console.log('Кэш устарел:', url);\n cache.delete(cacheKey);\n }\n }\n \n // Выполняем запрос\n console.log('Выполняем запрос:', url);\n const response = await fetch(url, options);\n \n // Клонируем response для кэширования\n const responseToCache = response.clone();\n \n // Кэшируем\n cache.set(cacheKey, {\n data: responseToCache,\n timestamp: Date.now()\n });\n \n return response;\n };\n}",
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
            "description": "Напишите функцию для безопасного вывода HTML.",
            "initialCode": "function escapeHTML(html) {\n // Экранируйте опасные символы HTML\n \n}",
            "solution": "function escapeHTML(html) {\n if (typeof html !== 'string') {\n return String(html);\n }\n \n return html\n .replace(/&/g, '&amp;')\n .replace(/</g, '&lt;')\n .replace(/>/g, '&gt;')\n .replace(/\"/g, '&quot;')\n .replace(/'/g, '&#x27;')\n .replace(/\\//g, '&#x2F;');\n}",
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
            "description": "Напишите утилиты для профилирования кода.",
            "initialCode": "function profilePerformance(func, iterations = 1000) {\n // Измерьте производительность функции\n \n}",
            "solution": "function profilePerformance(func, iterations = 1000, ...args) {\n // Разогрев\n for (let i = 0; i < 10; i++) {\n func(...args);\n }\n \n // Измерение\n const start = performance.now();\n \n for (let i = 0; i < iterations; i++) {\n func(...args);\n }\n \n const end = performance.now();\n const totalTime = end - start;\n const avgTime = totalTime / iterations;\n \n return {\n totalTime: `${totalTime.toFixed(2)}ms`,\n avgTime: `${avgTime.toFixed(4)}ms`,\n iterations,\n opsPerSecond: `${((iterations / totalTime) * 1000).toFixed(0)} ops/sec`\n };\n}",
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
            "description": "Напишите простой фреймворк для тестирования.",
            "initialCode": "function createTestSuite() {\n // Создайте простой фреймворк для тестирования\n \n}",
            "solution": "// Простой фреймворк для тестирования\nclass TestSuite {\n constructor() {\n this.tests = [];\n this.results = [];\n }\n \n // Добавление теста\n test(name, fn) {\n this.tests.push({name, fn});\n }\n \n // Запуск всех тестов\n async run() {\n console.log(`Запуск ${this.tests.length} тестов...`);\n \n for (const test of this.tests) {\n const start = performance.now();\n let passed = false;\n let error = null;\n \n try {\n await test.fn();\n passed = true;\n } catch (e) {\n error = e;\n passed = false;\n }\n \n const end = performance.now();\n const duration = end - start;\n \n this.results.push({\n name: test.name,\n passed,\n error,\n duration\n });\n \n const status = passed ? '✅' : '❌';\n console.log(`${status} ${test.name} (${duration.toFixed(2)}ms)`);\n }\n \n // Статистика\n const passedCount = this.results.filter(r => r.passed).length;\n const failedCount = this.results.length - passedCount;\n \n console.log(`\\nРезультаты: ${passedCount} пройдено, ${failedCount} не пройдено`);\n \n return {\n passed: failedCount === 0,\n results: this.results\n };\n }\n}",
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
            "description": "Напишите документацию для функции в формате JSDoc.",
            "initialCode": "/**\n * Вычисляет площадь круга\n */\nfunction circleArea(radius) {\n return Math.PI * radius * radius;\n}\n\n// Дополните документацию",
            "solution": "/**\n * Вычисляет площадь круга по заданному радиусу\n * \n * @param {number} radius - Радиус круга. Должен быть положительным числом.\n * @returns {number} Площадь круга.\n * @throws {TypeError} Если радиус не является числом.\n * @throws {RangeError} Если радиус отрицательный.\n * \n * @example\n * // Возвращает 78.53981633974483\n * circleArea(5);\n * \n * @example\n * // Выбрасывает RangeError\n * circleArea(-1);\n */\nfunction circleArea(radius) {\n if (typeof radius !== 'number') {\n throw new TypeError('Радиус должен быть числом');\n }\n \n if (radius < 0) {\n throw new RangeError('Радиус не может быть отрицательным');\n }\n \n return Math.PI * radius * radius;\n}",
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
            "description": "Определите типы для переменных: number, string, boolean, array, object.",
            "initialCode": "// Определите типы для переменных\nlet age;\nlet name;\nlet isStudent;\nlet scores;\nlet user;",
            "solution": "// Базовые типы TypeScript\nlet age: number = 25;\nlet name: string = 'Иван';\nlet isStudent: boolean = true;\nlet scores: number[] = [90, 85, 95];\nlet user: {name: string, age: number} = {name: 'Анна', age: 30};\n\nreturn [typeof age, typeof name, typeof isStudent, scores.length, user.name];",
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
            "description": "Создайте интерфейс User и используйте его для типизации объекта.",
            "initialCode": "// Создайте интерфейс User\n \n \nconst user: User = {\n name: 'Иван',\n age: 25,\n email: 'ivan@example.com'\n};\n\nreturn user.name;",
            "solution": "// Интерфейс\ninterface User {\n name: string;\n age: number;\n email?: string; // Опциональное свойство\n readonly id: number; // Только для чтения\n}\n\n// Использование интерфейса\nconst user: User = {\n name: 'Иван',\n age: 25,\n email: 'ivan@example.com',\n id: 1\n};\n\nreturn user.name;",
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
            "description": "Создайте класс Person с типами и модификаторами доступа.",
            "initialCode": "class Person {\n // Добавьте типы и модификаторы доступа\n \n constructor(name, age) {\n \n }\n \n greet() {\n \n }\n}",
            "solution": "class Person {\n // Публичные свойства\n name: string;\n age: number;\n \n // Приватное свойство\n private ssn: string;\n \n // Защищенное свойство\n protected nickname: string;\n \n constructor(name: string, age: number, ssn: string) {\n this.name = name;\n this.age = age;\n this.ssn = ssn;\n this.nickname = name.toLowerCase();\n }\n \n // Публичный метод\n greet(): string {\n return `Привет, я ${this.name}, мне ${this.age} лет`;\n }\n \n // Приватный метод\n private getFormattedSSN(): string {\n return `XXX-XX-${this.ssn.slice(-4)}`;\n }\n}\n\nconst person = new Person('Иван', 25, '123-45-6789');\nreturn person.greet();",
            "hints": [
                "private: доступ только внутри класса",
                "protected: доступ в классе и наследниках",
                "public: доступ везде (по умолчанию)"
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
            "description": "Используйте generics для обобщенных типов.",
            "initialCode": "// Создайте generic функцию\nfunction identity(arg) {\n return arg;\n}\n\n// Создайте generic класс\n ",
            "solution": "// Generic функция\nfunction identity<T>(arg: T): T {\n return arg;\n}\n\n// Generic класс\nclass Box<T> {\n private value: T;\n \n constructor(value: T) {\n this.value = value;\n }\n \n getValue(): T {\n return this.value;\n }\n}\n\nconst numberBox = new Box<number>(10);\nconst stringBox = new Box('текст');\n\nreturn [\n identity('test'),\n identity(5),\n numberBox.getValue(),\n stringBox.getValue()\n];",
            "hints": [
                "<T> определяет generic параметр",
                "extends добавляет ограничения",
                "keyof получает ключи типа"
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
            "description": "Определите типы для функций.",
            "initialCode": "// Определите типы для функций\nfunction add(a, b) {\n return a + b;\n}\n\nconst multiply = (a, b) => a * b;\n\n// Тип для функции обратного вызова\n ",
            "solution": "// Явное указание типов\nfunction add(a: number, b: number): number {\n return a + b;\n}\n\n// Стрелочная функция с типами\nconst multiply = (a: number, b: number): number => a * b;\n\n// Тип для функции\ntype MathOperation = (x: number, y: number) => number;\n\nconst divide: MathOperation = (a, b) => a / b;\n\n// Тип для функции обратного вызова\ntype Callback<T> = (error: Error | null, result: T) => void;\n\nreturn [\n add(2, 3),\n multiply(4, 5),\n divide(10, 2)\n];",
            "hints": [
                "function name(param: type): returnType",
                "(param: type) => returnType для стрелочных функций",
                "type Name = (params) => returnType для типов функций"
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
            "description": "Используйте утилитарные типы.",
            "initialCode": "interface User {\n id: number;\n name: string;\n age: number;\n email?: string;\n}\n\n// Создайте типы с помощью utility types\n ",
            "solution": "interface User {\n id: number;\n name: string;\n age: number;\n email?: string;\n}\n\n// Utility types\n// Partial<T> - все свойства становятся опциональными\ntype PartialUser = Partial<User>;\n\n// Required<T> - все свойства становятся обязательными\ntype RequiredUser = Required<User>;\n\n// Readonly<T> - все свойства только для чтения\ntype ReadonlyUser = Readonly<User>;\n\n// Pick<T, K> - выбирает свойства K из T\ntype UserNameAndAge = Pick<User, 'name' | 'age'>;\n\n// Omit<T, K> - исключает свойства K из T\ntype UserWithoutId = Omit<User, 'id'>;\n\nreturn 'Utility types готовы';",
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
            "description": "Используйте декораторы для метапрограммирования.",
            "initialCode": "// Создайте декораторы для классов и методов\n ",
            "solution": "// Декоратор класса\nfunction sealed(constructor: Function) {\n Object.seal(constructor);\n Object.seal(constructor.prototype);\n}\n\n// Декоратор метода\nfunction enumerable(value: boolean) {\n return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n descriptor.enumerable = value;\n };\n}\n\n// Применение декораторов\n@sealed\nclass Person {\n name: string;\n \n constructor(name: string) {\n this.name = name;\n }\n \n @enumerable(false)\n greet() {\n return `Привет, я ${this.name}`;\n }\n}\n\nconst person = new Person('Иван');\nreturn person.greet();",
            "hints": [
                "Декоратор класса получает конструктор",
                "Декоратор метода получает target, propertyKey, descriptor",
                "Декоратор свойства получает target, propertyKey"
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
            "description": "Используйте conditional types, mapped types.",
            "initialCode": "// Используйте conditional types, mapped types\n ",
            "solution": "// Conditional Types\ntype IsArray<T> = T extends any[] ? true : false;\n\ntype A = IsArray<number[]>; // true\ntype B = IsArray<string>; // false\n\n// Mapped Types\ntype Readonly2<T> = {\n readonly [K in keyof T]: T[K];\n};\n\ntype Optional2<T> = {\n [K in keyof T]?: T[K];\n};\n\ninterface User2 {\n name: string;\n age: number;\n}\n\ntype ReadonlyUser = Readonly2<User2>;\ntype OptionalUser = Optional2<User2>;\n\nreturn 'Продвинутые типы готовы';",
            "hints": [
                "T extends U ? X : Y для условных типов",
                "[K in keyof T] для mapped types",
                "`text${T}` для template literal types"
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
            "description": "Используйте TypeScript с внешними библиотеками.",
            "initialCode": "// Определите типы для работы с DOM API\n// Определите типы для fetch API\n ",
            "solution": "// Типы для DOM API\nconst div: HTMLDivElement = document.createElement('div');\nconst button: HTMLButtonElement = document.createElement('button');\n\nbutton.addEventListener('click', (event: MouseEvent) => {\n console.log(event.clientX, event.clientY);\n});\n\n// Типы для Fetch API\nasync function fetchWithTypes<T>(url: string): Promise<T> {\n const response = await fetch(url);\n \n if (!response.ok) {\n throw new Error(`HTTP error ${response.status}`);\n }\n \n return response.json() as Promise<T>;\n}\n\ninterface User {\n id: number;\n name: string;\n}\n\n// Использование\nasync function getUsers(): Promise<User[]> {\n return fetchWithTypes<User[]>('https://jsonplaceholder.typicode.com/users');\n}\n\nreturn 'TypeScript с библиотеками готов';",
            "hints": [
                "TypeScript включает типы для DOM API",
                "Используйте generics для fetch: Promise<T>",
                "Создавайте декларации типов для внешних библиотек"
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
            "description": "Напишите скрипт миграции JS кода на TypeScript.",
            "initialCode": "// JavaScript код\nfunction calculateTotal(items) {\n return items.reduce((total, item) => total + item.price, 0);\n}\n\nfunction getUserById(id, users) {\n return users.find(user => user.id === id);\n}\n\n// Конвертируйте в TypeScript\n ",
            "solution": "// Типизированный TypeScript код\n\ninterface Item {\n id: number;\n name: string;\n price: number;\n}\n\nfunction calculateTotal(items: Item[]): number {\n return items.reduce((total, item) => total + item.price, 0);\n}\n\ninterface User {\n id: number;\n name: string;\n age?: number;\n}\n\nfunction getUserById(id: number, users: User[]): User | undefined {\n return users.find(user => user.id === id);\n}\n\n// Пример использования\nconst items: Item[] = [\n {id: 1, name: 'Товар 1', price: 100},\n {id: 2, name: 'Товар 2', price: 200}\n];\n\nconst users: User[] = [\n {id: 1, name: 'Иван', age: 25},\n {id: 2, name: 'Анна'}\n];\n\nreturn [\n calculateTotal(items),\n getUserById(1, users)?.name\n];",
            "hints": [
                "Начните с any и постепенно заменяйте конкретными типами",
                "Создайте интерфейсы для основных структур данных",
                "Используйте strict mode для максимальной безопасности типов"
            ],
            "tests": [
                { "code": "interface Item {price: number}; function calculateTotal(items: Item[]): number { return items.reduce((t, i) => t + i.price, 0); } calculateTotal([{price: 10}, {price: 20}])", "expected": 30 }
            ],
            "chapter": "Часть 11: TypeScript"
        }
    ]
};