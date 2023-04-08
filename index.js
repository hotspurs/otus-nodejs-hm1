import structure from "./data.json" assert { type: "json" };

function makeTree(structure, level, isLast) {
    let tree = '';
    const { name, items } = structure;

    if (level === 1) {
        tree += `${name}\n`;
    }

    if (level > 1) {
        tree += `├──${name}\n`;
    }

    const itemsResult = items?.reduce((acc, item, currentIndex, array) => {
        const hasItems = item.items && item.items.length;

        if (hasItems) {
            const isLast = currentIndex === array.length - 1;
            const result = makeTree(item, level + 1, isLast);

            acc += result;
        } else {
            if (isLast) {
                acc += `└──${item.name}\n`;
            } else {
                acc += `│ └──${item.name}\n`;
            }
        }

        return acc;
    }, '')

    tree += itemsResult;

    return tree;
}

const result = makeTree(structure, 1);
console.log(result);