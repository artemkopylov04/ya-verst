### работу на обсуждение выставить НЕ против

## Сервер

### ```npm i && npm start```

## Ответы

### правильное использование БЭМ-сущностей

- какие части макета являются одним и тем же блоком?

Такие блоки выражены в файле scss/blocks/*.scss:

Блок кнопки, текста, разделителя, инпута, иконки, карточки, формы.

- какие стили относятся к блокам, а какие к элементам и модификаторам?

К блокам относятся все основные стили, с которыми блок является самостоятельным и может быть
переиспользован, к элементам относятся стили, которые в контексте не могут быть без блока.
А модификатор просто перекрывает стили блока или элемента.

Нельзя сказать какие конкретно свойства относятся к единственной сущности.

- где нужно использовать каскады и почему?

Лучше нигде. Можно внутри блока. Но лучше использовать миксы/модификаторы.


### консистентность

- какие видите базовые и семантические константы?

Константы различных цветов (бэкграунда, цвета текста, фон кнопок, шрифт, геометрия)
Брейкпоинты сетки

- какие видите закономерности в интерфейсе?

Постоянное комбинирование направления элементов (горизонтальное - вертикальное), дизайн система примитивных блоков. Цветовая гамма.

## адаптивность

- где видите вариативность данных и как это обрабатываете?

Информация в карточке может быть очень длинной (обрабатываю фиксированной шириной)

Иконки очистки инпута могут закрывать поле (увеличил паддинг)

- какие видите особенности, связанные с размером экрана?

Меняется направление движения блоков и элементов (с горизонтального на вертикальный и наоборот, относится к карточке)

Меняется геометрия блоков(в частности кнопок )

- что еще повлияло на вашу вёрстку?

Для простоты верстания флексами - создал классы и просто примиксовываю необходимые классы к блокам и элементам
