import Card, { CardTag } from "@/components/Card";
import { FlatList, View } from "react-native";

const data = [
  {
    title: "DESDE LOS ÁNGELES 🌴 - Game Awards 2024 ft. Mangel 🥭",
    tag: CardTag.Video,
    image:
      "https://i.ytimg.com/vi/GyEzU8nRi0U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAu9egq1lfSpnYeYP6rGkdnJQncOg",
  },
  {
    title: "Mr. Robot",
    tag: CardTag.Movie,
    image:
      "https://m.media-amazon.com/images/M/MV5BOTg4NTBiZDAtZTc0YS00NzZlLTg4Y2ItNGQ3M2ZlMDM5MWQzXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "redrum",
    tag: CardTag.Music,
    image:
      "https://imgs.search.brave.com/oXXdjCxbXo3QD7Bb2JqcJVVBV58cDetvHUkClEtwCWE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ny83Yi9BbWVyaWNh/bkRyZWFtLmpwZWcv/NTEycHgtQW1lcmlj/YW5EcmVhbS5qcGVn",
  },
  {
    title: "The Wild Project",
    tag: CardTag.Podcast,
    image:
      "https://imgs.search.brave.com/6SmQGiw4TFzjLNPi7U3F1WD8jvwx-u-wcnytDsypwoo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/ZG1wLWNhdGFsb2ct/aW1hZ2VzLXByb2Qv/aW1hZ2VzLzMyOWNl/Mzk1LTU5MTItNGFm/Ny1hYjFiLTVlYmYz/ZDkxOGZmNy9iODIy/YzVhOC0yNmUzLTQ5/OGQtODQ3NS02MDFl/YjE4MTZiODAtMTI5/MTcwMzk1MS5fU1g1/NzZfU1k1NzZfQkww/X1FMMTAwX0ZNcG5n/Xy5wbmc",
  },
  {
    title: "The New Yorker",
    tag: CardTag.Article,
    image:
      "https://www.collateralrepairproject.org/wp-content/uploads/2018/07/new-yorker-logo-better.jpg",
  },
  {
    title: "DESDE LOS ÁNGELES 🌴 - Game Awards 2024 ft. Mangel 🥭",
    tag: CardTag.Video,
    image:
      "https://i.ytimg.com/vi/GyEzU8nRi0U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAu9egq1lfSpnYeYP6rGkdnJQncOg",
  },
  {
    title: "Mr. Robot",
    tag: CardTag.Movie,
    image:
      "https://m.media-amazon.com/images/M/MV5BOTg4NTBiZDAtZTc0YS00NzZlLTg4Y2ItNGQ3M2ZlMDM5MWQzXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "redrum",
    tag: CardTag.Music,
    image:
      "https://imgs.search.brave.com/oXXdjCxbXo3QD7Bb2JqcJVVBV58cDetvHUkClEtwCWE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ny83Yi9BbWVyaWNh/bkRyZWFtLmpwZWcv/NTEycHgtQW1lcmlj/YW5EcmVhbS5qcGVn",
  },
  {
    title: "The Wild Project",
    tag: CardTag.Podcast,
    image:
      "https://imgs.search.brave.com/6SmQGiw4TFzjLNPi7U3F1WD8jvwx-u-wcnytDsypwoo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/ZG1wLWNhdGFsb2ct/aW1hZ2VzLXByb2Qv/aW1hZ2VzLzMyOWNl/Mzk1LTU5MTItNGFm/Ny1hYjFiLTVlYmYz/ZDkxOGZmNy9iODIy/YzVhOC0yNmUzLTQ5/OGQtODQ3NS02MDFl/YjE4MTZiODAtMTI5/MTcwMzk1MS5fU1g1/NzZfU1k1NzZfQkww/X1FMMTAwX0ZNcG5n/Xy5wbmc",
  },
  {
    title: "The New Yorker",
    tag: CardTag.Article,
    image:
      "https://www.collateralrepairproject.org/wp-content/uploads/2018/07/new-yorker-logo-better.jpg",
  },
];

export default function TabIndex() {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card title={item.title} tag={item.tag} img={item.image} />
        )}
      />
    </View>
  );
}
