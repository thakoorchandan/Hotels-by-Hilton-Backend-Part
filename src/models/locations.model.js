const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    location_id: { type: Number },
    name: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    num_reviews: { type: Number },
    timezone: { type: String },
    location_string: { type: String },
    photo: { type: String },
    awards: [
      {
        award_type: { type: String },
        year: { type: Number },
        images: { small: { type: String }, large: { type: String } },
        display_name: { type: String },
      },
    ],

    ranking_geo: { type: String },
    ranking: { type: String },
    ranking_category: { type: String },
    rating: { type: Number },
    price_level: { type: String },
    price: { type: String },
    hotel_class: { type: Number },
    facilities: [
      {
        facility: { type: String },
      },
    ],
    hilton_rooms: [
      { room_spec: { type: String }, room_price: { type: Number } },
    ],
  },
  {
    versionKey: false,
  }
);

const restaurantSchema = new mongoose.Schema(
  {
    location_id: { type: Number },
    name: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    num_reviews: { type: Number },
    timezone: { type: String },
    location_string: { type: String },
    photo: {
      images: {
        small: {
          width: { type: Number },
          url: { type: String },
          height: { type: Number },
        },
        thumbnail: {
          width: { type: Number },
          url: { type: String },
          height: { type: Number },
        },
        original: {
          width: { type: Number },
          url: { type: String },
          height: { type: Number },
        },
        large: {
          width: { type: Number },
          url: { type: String },
          height: { type: Number },
        },
        medium: {
          width: { type: Number },
          url: { type: String },
          height: { type: Number },
        },
      },
      is_blessed: { type: String },
      uploaded_date: { type: String },
      caption: { type: String },
      id: { type: Number },
      helpful_votes: { type: Number },
      published_date: { type: String },
      user: { member_id: { type: Number }, type: { type: String } },
    },
    awards: [
      {
        award_type: { type: String },
        year: { type: Number },
        images: { small: { type: String }, large: { type: String } },
        display_name: { type: String },
      },
    ],
    doubleclick_zone: { type: String },
    preferred_map_engine: { type: String },
    autobroaden_type: { type: String },
    autobroaden_label: { type: String },
    raw_ranking: { type: Number },
    ranking_geo: { type: String },
    ranking_geo_id: { type: Number },
    ranking_position: { type: Number },
    ranking_denominator: { type: Number },
    ranking_category: { type: String },
    ranking: { type: String },
    subcategory_type: { type: String },
    subcategory_type_label: { type: String },
    distance: { type: Number },
    distance_string: { type: String },
    bearing: { type: String },
    rating: { type: Number },
    is_closed: { type: String },
    open_now_text: { type: String },
    is_long_closed: { type: String },
    price_level: { type: String },
    price: { type: String },
    neighborhood_info: [
      { location_id: { type: Number }, name: { type: String } },
    ],
    description: { type: String },
    web_url: { type: String },
    write_review: { type: String },
    ancestors: [
      {
        subcategory: [{ key: { type: String }, name: { type: String } }],
        name: { type: String },
        abbrv: { type: String },
        location_id: { type: String },
      },
    ],
    category: { key: { type: String }, name: { type: String } },
    subcategory: [{ key: { type: String }, name: { type: String } }],
    parent_display_name: { type: String },
    is_jfy_enabled: { type: Boolean },
    phone: { type: String },
    website: { type: String },
    email: { type: String },
    address_obj: {
      street1: { type: String },
      street2: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      postalcode: { type: String },
    },
    address: { type: String },
    hours: {
      week_ranges: [
        [{ open_time: { type: Number }, close_time: { type: Number } }],
      ],
      timezone: { type: String },
    },
    cuisine: [{ key: { type: Number }, name: { type: String } }],
    dietary_restrictions: [{ key: { type: Number }, name: { type: String } }],
    booking: { provider: { type: String }, url: { type: String } },
    reserve_info: {
      id: { type: Number },
      provider: { type: String },
      provider_img: { type: String },
      url: { type: String },
      banner_text: { type: String },
    },
    establishment_types: [{ key: { type: Number }, name: { type: String } }],
  },
  {
    versionKey: false,
  }
);

const attractionSchema = new mongoose.Schema(
  {
    location_id: { type: Number },
    name: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    num_reviews: { type: Number },
    timezone: { type: String },
    location_string: { type: String },
    photo: {
      images: {
        small: {
          width: { type: Number },
          url: { type: String },
          height: { type: Number },
        },
        thumbnail: {
          width: { type: Number },
          url: { type: String },
          height: { type: Number },
        },
        original: {
          width: { type: Number },
          url: { type: String },
          height: { type: Number },
        },
        large: {
          width: { type: Number },
          url: { type: String },
          height: { type: Number },
        },
        medium: {
          width: { type: Number },
          url: { type: String },
          height: { type: Number },
        },
      },
      is_blessed: { type: Boolean },
      uploaded_date: { type: String },
      caption: { type: String },
      id: { type: Number },
      helpful_votes: { type: Number },
      published_date: { type: String },
      user: { member_id: { type: Number }, type: { type: String } },
    },
    awards: [
      {
        award_type: { type: String },
        year: { type: Number },
        images: { small: { type: String }, large: { type: String } },
        display_name: { type: String },
      },
    ],
    location_subtype: { type: String },
    doubleclick_zone: { type: String },
    preferred_map_engine: { type: String },
    raw_ranking: { type: Number },
    ranking_geo: { type: String },
    ranking_geo_id: { type: Number },
    ranking_position: { type: Number },
    ranking_denominator: { type: Number },
    ranking_category: { type: String },
    ranking_subcategory: { type: String },
    ranking: { type: String },
    distance: { type: Number },
    distance_string: { type: String },
    bearing: { type: String },
    rating: { type: Number },
    is_closed: { type: String },
    is_long_closed: { type: String },

    description: { type: String },
    web_url: { type: String },
    write_review: { type: String },
    ancestors: [
      {
        subcategory: [{ key: { type: String }, name: { type: String } }],
        name: { type: String },
        abbrv: { type: String },
        location_id: { type: String },
      },
    ],

    parent_display_name: { type: String },
    is_jfy_enabled: { type: Boolean },
    website: { type: String },
    address_obj: {
      street1: { type: String },
      street2: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      postalcode: { type: String },
    },
    address: { type: String },
    subtype: [{ key: { type: Number }, name: { type: String } }],
  },
  {
    versionKey: false,
  }
);

const Hotels = mongoose.model("hotels", hotelSchema);

const Restaurants = mongoose.model("restaurants", restaurantSchema);

const Attractions = mongoose.model("attractions", attractionSchema);

module.exports = { Hotels, Restaurants, Attractions };
