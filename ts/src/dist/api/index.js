const result1 = {
    code: 400,
    data: [1, 2, 3, 4, 5],
    error: 'error',
};
const result2 = {
    code: 200,
    data: 'data invalid',
    error: 'error',
};
const orderStatus = 'processing';
if (orderStatus === 'processing') {
    console.log('processing');
}
else if (orderStatus === 'pending') {
    console.log('pending');
}
else if (orderStatus === 'shipped') {
    console.log('shipped');
}
else if (orderStatus === 'delivered') {
    console.log('delivered');
}
else if (orderStatus === 'cancelled') {
    console.log('cancelled');
}
const handleOrderStatus = (status) => {
    switch (status) {
        case 'pending':
            console.log('pending');
            break;
        case 'processing':
            console.log('processing');
            break;
    }
};
console.log(handleOrderStatus(orderStatus));
const scoreMap = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8,
    'I': 9,
    'J': 10,
};
console.log(result1);
console.log(result2);
console.log(scoreMap);
