## Lab 5.2 - TanStack Query Integration

I refactored the application’s data fetching logic by replacing manual useEffect and fetch calls with TanStack Query. This removed the need for manually managing loading states and refreshing data.

I used the @tanstack/react-query library, which provides hooks such as useQuery and useMutation to handle server state efficiently with built-in caching and synchronization.

This improves user experience by making the application more responsive. Data updates automatically after actions like creating employees without requiring a page refresh.

This change improved my understanding of server state management and showed how specialized tools can simplify handling asynchronous data between frontend and backend.