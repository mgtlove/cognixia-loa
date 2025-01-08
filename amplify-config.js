import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import outputs from "@amplify/outputs.json";

Amplify.configure(outputs);
