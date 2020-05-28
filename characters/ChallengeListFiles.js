const text = 'List of mp3 files: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'
console.log(text.match(/\.mp3/g))

// in the future
console.log(text.match(/\w+\.mp3/g))
