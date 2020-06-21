const SHOP_DATA = {
	bedroom: {
		id: 1,
		title: 'Bedroom',
		routeName: 'bedroom',
		items: [
			{
				id: 1,
				name: 'Beds',
				imageURL:
					'https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'beds',
				products: [
					{
						id: 1,
						name: 'Four Post',
						imageURL:
							'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 2,
						name: 'Modern Outlook',
						imageURL:
							'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 2,
				name: 'Bedside Tables',
				imageURL:
					'https://images.unsplash.com/photo-1487600849525-7d8eccadd679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'bedTables',
				products: [
					{
						id: 3,
						name: 'First',
						imageURL:
							'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 4,
						name: 'Wood with White',
						imageURL:
							'https://images.pexels.com/photos/545046/pexels-photo-545046.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 3,
				name: 'Sets',
				imageURL:
					'https://images.unsplash.com/photo-1463620910506-d0458143143e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'bedSets',
				products: [
					{
						id: 5,
						name: 'Princess Set',
						imageURL:
							'https://images.pexels.com/photos/763148/pexels-photo-763148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 6,
						name: 'Grey set',
						imageURL:
							'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 4,
				name: 'Desks',
				imageURL:
					'https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'bedDesks',
				products: [
					{
						id: 7,
						name: 'Side desk',
						imageURL:
							'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 8,
						name: 'Trunk',
						imageURL:
							'https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 5,
				name: 'bedCabinets',
				imageURL:
					'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'wardrobe',
				products: [
					{
						id: 9,
						name: 'Book Cupboard Decor',
						imageURL:
							'https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 10,
						name: 'Ladder',
						imageURL:
							'https://images.pexels.com/photos/2826787/pexels-photo-2826787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 6,
				name: 'Lighting',
				imageURL:
					'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'bedLights',
				products: [
					{
						id: 11,
						name: 'Hanging Globe',
						imageURL:
							'https://images.pexels.com/photos/3046404/pexels-photo-3046404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 12,
						name: '',
						imageURL: '',
						price: 500,
					},
				],
			},
			{
				id: 7,
				name: 'All',
				imageURL:
					'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'bedAll',
				products: [
					{
						id: 13,
						name: 'Bedroom set',
						imageURL:
							'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 14,
						name: 'Bed, Ottoman',
						imageURL:
							'https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
		],
	},
	living: {
		id: 2,
		title: 'Living',
		routeName: 'living',
		items: [
			{
				id: 8,
				name: 'Couches',
				imageURL:
					'https://images.unsplash.com/photo-1507138451611-3001135909fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'livingCouches',
				products: [
					{
						id: 15,
						name: 'Black Leather Suite',
						imageURL:
							'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
						price: 500,
					},
					{
						id: 16,
						name: 'Grey Fabric Suite',
						imageURL:
							'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
						price: 500,
					},
				],
			},
			{
				id: 9,
				name: 'Coffee Tables',
				imageURL:
					'https://images.unsplash.com/photo-1517467139951-f5a925c9f9de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'livingCoffeeTables',
				products: [
					{
						id: 17,
						name: 'Wooden, Metal',
						imageURL:
							'https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 18,
						name: 'White Square',
						imageURL:
							'https://images.pexels.com/photos/3747073/pexels-photo-3747073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 10,
				name: 'Ottomans',
				imageURL:
					'https://images.unsplash.com/photo-1581631059762-566beaaa6be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'livingOttomans',
				products: [
					{
						id: 19,
						name: 'Grey Ottoman',
						imageURL:
							'https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 20,
						name: 'Fabric Ottoman',
						imageURL:
							'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 11,
				name: 'TV Cabinets',
				imageURL:
					'https://images.unsplash.com/photo-1542486191-fda8259f0873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'livingTVcabinets',
				products: [
					{
						id: 21,
						name: 'Low white',
						imageURL:
							'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 22,
						name: 'Woorden Long',
						imageURL:
							'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 12,
				name: 'Decor',
				imageURL:
					'https://images.unsplash.com/photo-1529088065352-38829cd9968b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'livingDecor',
				products: [
					{
						id: 23,
						name: 'pottery',
						imageURL:
							'https://images.pexels.com/photos/842950/pexels-photo-842950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
						price: 500,
					},
					{
						id: 24,
						name: 'gallery',
						imageURL:
							'https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 13,
				name: 'Sets',
				imageURL:
					'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'livingSets',
				products: [
					{
						id: 25,
						name: 'Lounge, Table Set',
						imageURL:
							'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 26,
						name: 'Suede and Wood',
						imageURL:
							'https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
		],
	},
	dining: {
		id: 3,
		title: 'Dining',
		routeName: 'dining',
		items: [
			{
				id: 14,
				name: 'Tables',
				imageURL:
					'https://images.unsplash.com/photo-1565996953942-943cebc0fa7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'diningTables',
				products: [
					{
						id: 27,
						name: 'Mahogany',
						imageURL:
							'https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 28,
						name: 'White Circular',
						imageURL:
							'https://images.pexels.com/photos/2275294/pexels-photo-2275294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 15,
				name: 'Chairs',
				imageURL:
					'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'diningChairs',
				products: [
					{
						id: 29,
						name: 'White',
						imageURL:
							'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 30,
						name: 'Casual, Metal',
						imageURL:
							'https://images.pexels.com/photos/358572/pexels-photo-358572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 16,
				name: 'Sideboards',
				imageURL:
					'https://images.unsplash.com/photo-1565058650109-849d383455ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'diningSideboards',
				products: [
					{
						id: 31,
						name: 'Black',
						imageURL:
							'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 32,
						name: 'White',
						imageURL:
							'https://images.pexels.com/photos/269218/pexels-photo-269218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 17,
				name: 'Sets',
				imageURL:
					'https://images.unsplash.com/photo-1572297259518-0974576b6738?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'diningSets',
				products: [
					{
						id: 33,
						name: 'Circular',
						imageURL:
							'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 34,
						name: 'Casual',
						imageURL:
							'https://images.pexels.com/photos/358572/pexels-photo-358572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
		],
	},
	study: {
		id: 4,
		title: 'Study',
		routeName: 'study',
		items: [
			{
				id: 18,
				name: 'Desk',
				imageURL:
					'https://images.unsplash.com/photo-1589333871498-a527dd7940b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'studyDesk',
				products: [
					{
						id: 35,
						name: 'Trunk',
						imageURL:
							'https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 36,
						name: 'Desk',
						imageURL:
							'https://images.pexels.com/photos/373883/pexels-photo-373883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 19,
				name: 'Chairs',
				imageURL:
					'https://images.unsplash.com/photo-1505797149-43b0069ec26b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'studyChair',
				products: [
					{
						id: 37,
						name: 'Single Couch',
						imageURL:
							'https://images.pexels.com/photos/945225/pexels-photo-945225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 38,
						name: 'Office chair',
						imageURL:
							'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 20,
				name: 'Lamps',
				imageURL:
					'https://images.unsplash.com/photo-1570974802254-4b0ad1a755f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'studyLamp',
				products: [
					{
						id: 39,
						name: '',
						imageURL: '',
						price: 500,
					},
					{
						id: 40,
						name: '',
						imageURL: '',
						price: 500,
					},
				],
			},
			{
				id: 21,
				name: 'Sets',
				imageURL:
					'https://images.unsplash.com/photo-1526887593587-a307ea5d46b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'studySet',
				products: [
					{
						id: 41,
						name: 'Modern',
						imageURL:
							'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 42,
						name: '',
						imageURL: '',
						price: 500,
					},
				],
			},
		],
	},
	outdoors: {
		id: 5,
		title: 'Outdoors',
		routeName: 'outdoors',
		items: [
			{
				id: 22,
				name: 'Loungers',
				imageURL:
					'https://images.unsplash.com/photo-1560990883-9b76fec399a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'outdoorLounges',
				products: [
					{
						id: 43,
						name: 'Modern',
						imageURL:
							'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 44,
						name: 'Blue Cushion',
						imageURL:
							'https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 23,
				name: 'Tables',
				imageURL:
					'https://images.unsplash.com/photo-1512425296298-43a8c196eeed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'outdoorTables',
				products: [
					{
						id: 45,
						name: 'Small Circular Black',
						imageURL:
							'https://images.pexels.com/photos/988508/pexels-photo-988508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 46,
						name: 'Long, Dinner',
						imageURL:
							'https://images.pexels.com/photos/3046403/pexels-photo-3046403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 24,
				name: 'Sets',
				imageURL:
					'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'outdoorSets',
				products: [
					{
						id: 47,
						name: 'Rocking Bed',
						imageURL:
							'https://images.pexels.com/photos/879010/pexels-photo-879010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 48,
						name: 'Outdoor Eating',
						imageURL:
							'https://images.pexels.com/photos/3046403/pexels-photo-3046403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
		],
	},
	electronics: {
		id: 6,
		title: 'Electronics',
		routeName: 'electronics',
		items: [
			{
				id: 25,
				name: 'TVs',
				imageURL:
					'https://images.unsplash.com/photo-1558888401-3cc1de77652d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'electronicsTvs',
				products: [
					{
						id: 49,
						name: 'HD',
						imageURL:
							'https://images.pexels.com/photos/3898585/pexels-photo-3898585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 50,
						name: 'LED',
						imageURL:
							'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 26,
				name: 'Kitchen Appliances',
				imageURL:
					'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'electronicAppliances',
				products: [
					{
						id: 51,
						name: 'Fridge',
						imageURL:
							'https://images.pexels.com/photos/3637728/pexels-photo-3637728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 52,
						name: 'Oven',
						imageURL:
							'https://images.pexels.com/photos/3847520/pexels-photo-3847520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 27,
				name: 'Stereo',
				imageURL:
					'https://images.unsplash.com/photo-1585246135063-c361ccd416b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'electronicsStereo',
				products: [
					{
						id: 53,
						name: 'Speaker set',
						imageURL:
							'https://images.pexels.com/photos/191877/pexels-photo-191877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 54,
						name: 'Surround Sound',
						imageURL:
							'https://images.pexels.com/photos/373632/pexels-photo-373632.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
			{
				id: 28,
				name: 'Heating and Cooling',
				imageURL:
					'https://images.unsplash.com/photo-1506619956381-26a36a943b27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'electronicsHeating',
				products: [
					{
						id: 55,
						name: 'Gas, Outdoor Heater',
						imageURL:
							'https://images.pexels.com/photos/923289/pexels-photo-923289.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 56,
						name: 'Faux Fire',
						imageURL:
							'https://images.pexels.com/photos/2431653/pexels-photo-2431653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
		],
	},
	misc: {
		id: 7,
		title: 'Miscellaneous',
		routeName: 'misc',
		items: [
			{
				id: 29,
				name: 'All',
				imageURL:
					'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
				routeName: 'miscAll',
				products: [
					{
						id: 57,
						name: 'Funky Chairs',
						imageURL:
							'https://images.pexels.com/photos/220749/pexels-photo-220749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
					{
						id: 58,
						name: 'Decor',
						imageURL:
							'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
						price: 500,
					},
				],
			},
		],
	},
};

export default SHOP_DATA;
