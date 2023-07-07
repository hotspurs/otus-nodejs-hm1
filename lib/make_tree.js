export function makeTree(structure, level = 1, isLastItem) {
    const { name, items } = structure;
    let tree = '';
    let indents = [];

    if (level >= 2) {
        indents = Array(level - 1).fill('│ ');
    }

    if (level === 1) {
        tree += `\n${name}\n`;
    }

    if (level > 1) {
        tree += level >= 2 ? `${indents.slice(1).join('')}${isLastItem ? '└──' : '├──'}${name}\n` : `├──${name}\n`;
    }

    const itemsResult = items?.reduce((acc, item, currentIndex, array) => {
        const hasItems = item.items && item.items.length;
        const isLast = currentIndex === array.length - 1;

        if (hasItems) {
            const result = makeTree(item, level + 1, isLast);

            acc += result;
        } else {
            acc +=  `${indents.slice(isLastItem ? 1 : 0).join('')}└──${item.name}\n`
        }

        return acc;
    }, '')

    tree += itemsResult;

    return tree;
}