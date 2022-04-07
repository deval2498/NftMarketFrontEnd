import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'x230jrf8',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'sk257azh7bHHHn7AllKrdd2Hs7gYMQqtCDdnwRKPi9Jn8QtOmak5uPMvs9Pmj52aLx5fkAoHnUeXCi8tczEzlMHTVekDy0LKEcMxW04smS5sstK0SaCITMyOTkLXi1IIjRgGyCHhEF5Ngk635tteggxmjdPQr7WKPpOtheMPbTVewctP4de1',
    useCdn: false
})