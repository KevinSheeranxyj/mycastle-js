

type ScoreMap = {
    [key: string]: number;
}

type Result<T> = {
    code: number;
    data: T;
    error: string;
}

const result1: Result<number[]> = {
    code: 400,
    data: [1, 2, 3, 4, 5],
    error: 'error',
}

const result2: Result<string> = {
    code: 200,
    data: 'data invalid',
    error: 'error',
}

type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
const orderStatus: OrderStatus = 'processing';
if (orderStatus === 'processing') {
    console.log('processing');
} else if (orderStatus === 'pending') {
    console.log('pending');
} else if (orderStatus === 'shipped') {
    console.log('shipped');
} else if (orderStatus === 'delivered') {
    console.log('delivered');
} else if (orderStatus === 'cancelled') {
    console.log('cancelled');
}

type Handler = (status: OrderStatus) => void;
const handleOrderStatus: Handler = (status) => {
    switch (status) {
        case 'pending':
            console.log('pending');
            break;
        case 'processing':
            console.log('processing');
            break;
    }
}

console.log(handleOrderStatus(orderStatus));

const scoreMap: ScoreMap = {
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
}
console.log(result1);
console.log(result2);
console.log(scoreMap);