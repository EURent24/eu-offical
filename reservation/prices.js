var car_prices = {
	xs:  // 1,25 EUR
	{
		prepaid_km: 1,
		extra_km: 1.25,
		deals: [
			{
				days_min: 1,
				days_max: 1,
				price_per_day: 250,
			},
			{
				days_min: 2,
				days_max: 2,
				price_per_day: 225,
			},
			{
				days_min: 3,
				days_max: 20,
				price_per_day: 210,
			},
			{
				days_min: 21,
				days_max: 0, // 0 means unlimited
				price_per_day: 180,
			}
		]
	},
	s: // 1,50 EUR
	{
		prepaid_km: 1.20,
		extra_km: 1.50,
		deals: [
			{
				days_min: 1,
				days_max: 1,
				price_per_day: 300,
			},
			{
				days_min: 2,
				days_max: 2,
				price_per_day: 275,
			},
			{
				days_min: 3,
				days_max: 20,
				price_per_day: 240,
			},
			{
				days_min: 21,
				days_max: 0,
				price_per_day: 220,
			}
		]
	},
	m: // 2 EUR
	{
			prepaid_km: 1.70,
			extra_km: 2,
			deals: [
				{
					days_min: 1,
					days_max: 1,
					price_per_day: 370,
				},
				{
					days_min: 2,
					days_max: 2,
					price_per_day: 350,
				},
				{
					days_min: 3,
					days_max: 20,
					price_per_day: 300,
				},
				{
					days_min: 21,
					days_max: 0,
					price_per_day: 280,
				}
			]
	},
	l: // 2,50 EUR
	{
		prepaid_km: 2,
		extra_km: 2.50,
		deals: [
			{
				days_min: 1,
				days_max: 1,
				price_per_day: 450,
			},
			{
				days_min: 2,
				days_max: 2,
				price_per_day: 425,
			},
			{
				days_min: 3,
				days_max: 20,
				price_per_day: 400,
			},
			{
				days_min: 21,
				days_max: 0,
				price_per_day: 370,
			}
		]
	},
	xl: // 3 EUR
	{
		prepaid_km: 2.50,
		extra_km: 3,
		deals: [
			{
				days_min: 1,
				days_max: 1,
				price_per_day: 550,
			},
			{
				days_min: 2,
				days_max: 2,
				price_per_day: 500,
			},
			{
				days_min: 3,
				days_max: 20,
				price_per_day: 450,
			},
			{
				days_min: 21,
				days_max: 0, // 0 means unlimited
				price_per_day: 420,
			}
		]
	},
	xxl: // 4 EUR
	{	
		prepaid_km: 3.50,
		extra_km: 4,
		deals: [
			{
				days_min: 1,
				days_max: 1,
				price_per_day: 770,
			},
			{
				days_min: 2,
				days_max: 2,
				price_per_day: 700,
			},
			{
				days_min: 3,
				days_max: 20,
				price_per_day: 650,
			},
			{
				days_min: 21,
				days_max: 0, // 0 means unlimited
				price_per_day: 610,
			}
		]
	},
	xxxl: // 5 EUR
	{
		prepaid_km: 4.50,
		extra_km: 5,
		deals: [
			{
				days_min: 1,
				days_max: 1,
				price_per_day: 870,
			},
			{
				days_min: 2,
				days_max: 2,
				price_per_day: 800,
			},
			{
				days_min: 3,
				days_max: 20,
				price_per_day: 750,
			},
			{
				days_min: 21,
				days_max: 0, // 0 means unlimited
				price_per_day: 710,
			}
		]
	},
	xxxxl: // 6 EUR
	{
		prepaid_km: 5.50,
		extra_km: 6,
		deals: [
			{
				days_min: 1,
				days_max: 1,
				price_per_day: 970,
			},
			{
				days_min: 2,
				days_max: 2,
				price_per_day: 900,
			},
			{
				days_min: 3,
				days_max: 20,
				price_per_day: 850,
			},
			{
				days_min: 21,
				days_max: 0, // 0 means unlimited
				price_per_day: 810,
			}
		]
	}
}