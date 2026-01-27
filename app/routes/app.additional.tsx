import {
  Badge,
  BlockStack,
  Box,
  Card,
  InlineStack,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

const presets = [
  {
    name: "Light",
    description: "Clean and crisp. Great for bright storefronts.",
  },
  {
    name: "Dark",
    description: "High-contrast bar that stands out on minimal themes.",
  },
  {
    name: "Glass",
    description: "Soft blur effect with premium, modern vibes.",
  },
  {
    name: "Minimal",
    description: "Barely-there bar with subtle borders and text.",
  },
  {
    name: "Custom",
    description: "Use your own colors and button styling.",
  },
];

export default function AdditionalPage() {
  return (
    <Page>
      <TitleBar title="Design presets" />
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text as="h2" variant="headingMd">
                Theme presets
              </Text>
              <Text as="p" variant="bodyMd">
                Pick a preset in the theme editor, then fine-tune colors to match
                your storefront.
              </Text>
              <BlockStack gap="300">
                {presets.map((preset) => (
                  <Box
                    key={preset.name}
                    padding="300"
                    borderWidth="025"
                    borderRadius="200"
                    borderColor="border"
                  >
                    <BlockStack gap="150">
                      <InlineStack gap="200" align="start">
                        <Badge tone="info">{preset.name}</Badge>
                        <Text as="span" variant="bodySm" tone="subdued">
                          {preset.description}
                        </Text>
                      </InlineStack>
                    </BlockStack>
                  </Box>
                ))}
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                Pro tips
              </Text>
              <Text as="p" variant="bodySm">
                Keep the button label short (2–3 words) and highlight savings
                when compare-at pricing is available.
              </Text>
              <Text as="p" variant="bodySm">
                Use the sticky bar on mobile-only templates for the biggest lift.
              </Text>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
