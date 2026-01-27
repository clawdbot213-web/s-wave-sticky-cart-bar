import type { LoaderFunctionArgs } from "@remix-run/node";
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  InlineStack,
  List,
  Box,
  Badge,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};

const THEME_EDITOR_URL = "shopify:admin/themes/current/editor?context=apps";

export default function Index() {
  return (
    <Page>
      <TitleBar title="Sticky Add-to-Cart Bar" />
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="400">
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">
                    Quick start
                  </Text>
                  <Text as="p" variant="bodyMd">
                    Add the Sticky Cart Bar to your product template and launch
                    in minutes.
                  </Text>
                </BlockStack>
                <List type="number">
                  <List.Item>Open your theme editor.</List.Item>
                  <List.Item>
                    Add the <strong>Sticky cart bar</strong> app block to the
                    product template.
                  </List.Item>
                  <List.Item>
                    Pick a theme preset, customize labels, and save.
                  </List.Item>
                </List>
                <InlineStack gap="300">
                  <Button url={THEME_EDITOR_URL} target="_top" variant="primary">
                    Open theme editor
                  </Button>
                  <Button url="/app/additional" variant="plain">
                    Explore design presets
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <Card>
              <BlockStack gap="300">
                <Text as="h2" variant="headingMd">
                  Status
                </Text>
                <InlineStack gap="200" align="start">
                  <Badge tone="success">App installed</Badge>
                  <Badge>Theme app extension</Badge>
                </InlineStack>
                <Text as="p" variant="bodySm">
                  Your sticky bar appears only on product pages and stays hidden
                  when the native add-to-cart form is visible.
                </Text>
                <Button url={THEME_EDITOR_URL} target="_top" fullWidth>
                  Add app block
                </Button>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>

        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingMd">
                  Built-in controls
                </Text>
                <Text as="p" variant="bodyMd">
                  Give shoppers a polished, frictionless add-to-cart experience
                  with smart defaults.
                </Text>
                <InlineStack gap="200" wrap>
                  {[
                    "Theme presets",
                    "Sticky top/bottom",
                    "Quantity selector",
                    "Compare-at savings",
                    "Product image",
                    "Vendor + price",
                  ].map((label) => (
                    <Box
                      key={label}
                      padding="200"
                      borderWidth="025"
                      borderRadius="200"
                      borderColor="border"
                    >
                      <Text as="span" variant="bodySm">
                        {label}
                      </Text>
                    </Box>
                  ))}
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
