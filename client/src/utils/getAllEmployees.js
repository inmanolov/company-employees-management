export const getEmployees = (teamasAndEmployees) => {
    const teams = teamasAndEmployees.reduce((teamObject, employee) => {
        (teamObject[employee.name] = teamObject[employee.name] || []).push([employee.username, employee.first_name, employee.last_name]);

        return teamObject;
    }, {});

    // return Object.entries(teams).map((team) => {
    //     const name = creator[0];
    //     const sum = creator[1].map((item) => Number(item.price)).reduce((prev, curr) => prev + curr, 0);

    //     return ({ seller, sum });
    // });
    return [teams];
};

// export const getCreators = (nfts) => {
//     const creators = nfts.reduce((creatorObject, nft) => {
//         (creatorObject[nft.seller] = creatorObject[nft.seller] || []).push(nft);

//         return creatorObject;
//     }, {});

//     return Object.entries(creators).map((creator) => {
//         const seller = creator[0];
//         const sum = creator[1].map((item) => Number(item.price)).reduce((prev, curr) => prev + curr, 0);

//         return ({ seller, sum });
//     });
// };