let root = document.getElementById('root');
let title = document.getElementById('title');
let body = document.getElementById('body');
let userId = document.getElementById('user-id');
let btn = document.getElementById('btn');
let successMessage = document.getElementById('success-message');

btn.onclick = () => {
    if (title.value && body.value && userId.value) {
        let postData = {
            title: title.value,
            body: body.value,
            userId: userId.value
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(postData),
        })
        .then(response => {
            if (response.ok) {
                successMessage.innerText = 'Успешно отправлено';
                successMessage.style.color = 'green';
                title.value = '';
                body.value = '';
                userId.value = '';
            } 
        })
        .catch(error => {
            console.log('Error:', error);
            successMessage.innerText = 'Произошла ошибка';
            successMessage.style.color = 'red';
        });
    }
};