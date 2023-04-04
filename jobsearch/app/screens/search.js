import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRouter, Stack } from "expo-router";
import { COLORS, FONT, SIZES } from "../../constants";
import axios from "axios";
import JobsCard from "../../components/cards/JobsCard";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles/search";

const search = () => {
  const router = useRouter();

  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: value,
        page: page.toString(),
      },
      headers: {
        "X-RapidAPI-Key": "574b098e77msh06b6add569c3466p1f4f79jsn9399e1a098d0",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };
    if (value) {
      setTitle(value);
      setSubTitle("Job Opportunities");
      setLoading(true);
      setResult([]);
      try {
        const response = await axios.request(options);
        setResult(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handlePagination = (direction) => {
    if (value) {
      if (direction === "left" && page > 1) {
        setPage(page - 1);
        handleSearch();
      } else if (direction === "right") {
        setPage(page + 1);
        handleSearch();
      }
    }
  };

  const handleTextChange = (text) => {
    setTitle("");
    setSubTitle("");
    setValue(text);
    setPage(1);
    setResult([]);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          header: () => (
            <View
              style={{
                marginTop: 30,
                marginBottom: 5,
                padding: 5,
                flexDirection: "row",
                justifyContent: "space-around",
                elevation: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  router.back();
                }}
              >
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>

              <TextInput
                style={{
                  width: "70%",
                  paddingHorizontal: 16,
                  backgroundColor: COLORS.white,
                  borderRadius: 5,
                  alignContent: "center",
                  fontFamily: FONT.regular,
                }}
                autoComplete="off"
                autoCorrect={true}
                onSubmitEditing={handleSearch}
                placeholder="search"
                onChangeText={(text) => handleTextChange(text)}
              />
              <TouchableOpacity onPress={handleSearch}>
                <Ionicons name="send" size={24} color={COLORS.secondary} />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
        }}
      />

      <FlatList
        data={result}
        renderItem={({ item }) => (
          <JobsCard
            job={item}
            handlePress={() => router.push(`/job-details/${item.job_id}`)}
          />
        )}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        ListHeaderComponent={() => (
          <View>
            <View style={styles.container}>
              <Text style={styles.searchTitle}>{title}</Text>
              <Text style={styles.noOfSearchedJobs}>{subTitle}</Text>
            </View>

            <View style={styles.loaderContainer}>
              {loading ? (
                <ActivityIndicator size="large" color={COLORS.secondary} />
              ) : (
                error && <Text>Something went wrong</Text>
              )}
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={() => handlePagination("left")}
            >
              <Ionicons
                name="arrow-back-circle-sharp"
                size={24}
                color={COLORS.secondary}
              />
            </TouchableOpacity>
            <View style={styles.paginationTextBox}>
              <Text style={styles.paginationText}>{page}</Text>
            </View>

            <TouchableOpacity
              style={styles.paginationButton}
              onPress={() => handlePagination("right")}
            >
              <Ionicons
                name="arrow-forward-circle-sharp"
                size={24}
                color={COLORS.secondary}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default search;
